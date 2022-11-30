import moment from "moment";
import ResponseManager from "../services/ResponseManager";

const trainingSpec = require("../assets/training_spec.json");
const _warningTimeout = 3000;

export class Trial {
  constructor(
    phaseId,
    objectiveId,
    trialId,
    registrationId,
    spec,
    previousTrial
  ) {
    this.id = trialId;
    this.objectiveId = objectiveId;
    this.phaseId = phaseId;
    this.registrationId = registrationId;
    this.objective = spec;

    this.promptTimeout = this.objective.promptTimeout;
    this.promptStart = previousTrial === null;
    this.promptAction = !this.promptStart;
    if (this.objective.scripted) {
      this.initial = previousTrial
        ? previousTrial.current
        : this.scriptedScenario(4, this.objective.behaviorScript[trialId - 1]);
      this.options = [];
      for (let i in this.objective.actionScript[trialId - 1]) {
        this.options.push(
          this.scriptedScenario(
            this.objective.actionScript[trialId - 1][i],
            this.objective.behaviorScript[trialId]
          )
        );
      }
    } else {
      this.initial = previousTrial
        ? previousTrial.current
        : this.buildScenario("prompt");
      this.options = this.generateOptions(this.initial.behavior.correct);
    }
    this.current = null;

    this.warnUserFaster = false;
    this.studentAnimation = null;
    this.teacherAnimation = null;
    this.idleState = {
      studentAnimation: spec.studentIdleAnimation,
      teacherAnimation: "teacher_idle.png"
    };
    if (!this.promptStart) {
      this.promptUser();
    }
  }

  generateOptions(correctActionType) {
    let options = [
      this.buildScenario("praise"),
      this.buildScenario("prompt"),
      this.buildScenario("encourage"),
      this.buildScenario("silent"),
      this.buildScenario("reprimand")
    ];
    let trial = this;
    let actionMap = this.objective.actionMap;
    options = this.shuffleOptions(options);
    options.forEach((scenario, index) => {
      scenario.action.position = index;
      if (scenario.action.type === correctActionType) {
        trial.correctActionPos = index;
        trial.correctActionId = scenario.action.id;
        trial.correctActionText = actionMap[scenario.action.id].text;
      }
    });

    return options;
  }

  shuffleOptions(options) {
    var currentIndex = options.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = options[currentIndex];
      options[currentIndex] = options[randomIndex];
      options[randomIndex] = temporaryValue;
    }
    return options;
  }

  startTrial() {
    this.current = this.initial;
    this.promptStart = false;
  }

  buildScenario(type) {
    const action = this.selectAction(type);
    const behavior = this.selectBehavior();
    return {action, behavior};
  }

  selectAction(type) {
    const availableActions = this.objective.actionSet.actions[type].map(
      i => this.objective.actionMap[i]
    );
    const action = selectRandomFromList(availableActions);
    action.type = type;
    return action;
  }

  selectBehavior() {
    const availableBehaviors = this.objective.behaviorSet.behaviors.map(
      i => this.objective.behaviorMap[i]
    );
    return selectRandomFromList(availableBehaviors);
  }

  scriptedScenario(actionId, behaviorId) {
    const action = this.objective.actionMap[actionId];
    const behavior = this.objective.behaviorMap[behaviorId];
    return {action, behavior};
  }

  promptUser() {
    this.promptAction = true;
    this.warnUserFaster = false;
    if (this.promptTime === undefined) {
      this.promptTime = moment().format();
    }
    this.setTrialTimeout(() => this.timeoutUser(), this.promptTimeout);
  }

  setTrialTimeout(handler, timeout) {
    clearTimeout(this.currentTimeout);
    this.currentTimeout = setTimeout(handler, timeout);
  }

  timeoutUser() {
    if (this.response === undefined) {
      this.responseTime = moment();
      this.warnUserFaster = true;
      this.promptAction = false;
      ResponseManager.postResponse(
        this.buildResponseForSelection({id: -1, position: -1})
      );
      this.setTrialTimeout(() => this.promptUser(), _warningTimeout);
    }
  }

  submitResponse(userSelection) {
    this.response = userSelection;
    this.objective.trials.push(this);
    this.isCorrect = userSelection.action.id === this.correctActionId;
    this.responseTime = moment();

    this.promptAction = false;
    ResponseManager.postResponse(
      this.buildResponseForSelection(userSelection.action)
    );
    this.current = userSelection;
  }

  buildResponseForSelection({id, position}) {
    return {
      versionId: trainingSpec.versionId,
      registrationId: this.registrationId,
      phaseId: this.phaseId,
      objectiveId: this.objectiveId,
      trialNum: this.id,
      behaviorId: this.initial.behavior.id,
      responseActionId: id,
      responseActionPos: position,
      responseDelay: moment(this.responseTime).diff(moment(this.promptTime)),
      responseTimestamp: this.responseTime,
      correctActionId: this.correctActionId,
      correctActionPos: this.correctActionPos
    };
  }
}

function selectRandomFromList(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

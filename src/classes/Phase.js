import {Trial} from "./Trial";

const trainingSpec = require("../assets/training_spec.json");
let _phaseSpec;

function loadTrainingSpec() {
  _phaseSpec = trainingSpec["phases"];
  for (let i in _phaseSpec) {
    const phase = _phaseSpec[i];
    for (let j in phase.objectives) {
      const objective = phase.objectives[j];
      objective.actionSet =
        trainingSpec["actionSets"][objective["actionSetId"]];
      objective.actionMap = trainingSpec["actionMap"];
      objective.behaviorSet =
        trainingSpec["behaviorSets"][objective["behaviorSetId"]];
      objective.behaviorMap = trainingSpec["behaviorMap"];
    }
  }
}

loadTrainingSpec();

export class Phase {
  trial;

  constructor(i, registrationId) {
    if (_phaseSpec === undefined) {
      loadTrainingSpec();
    }
    this.phaseIndex = i;
    this.registrationId = registrationId;
    this.spec = _phaseSpec[i];
    this.feedbackFrequency = this.spec.feedbackFrequency;
    this.phaseId = this.spec.id;
    this.objectives = this.spec.objectives;
    this.objectiveIndex = 0;
    this.introPages = this.spec.introduction;
    this.introIndex = 0;
  }

  showIntro() {
    return (
      this.introPages !== undefined && this.introIndex < this.introPages.length
    );
  }

  isObjectiveComplete() {
    return (
      this.hasTrial() && this.trial.id >= this.currentObjective().trialCount
    );
  }

  isPhaseComplete() {
    return (
      this.isObjectiveComplete() &&
      this.objectiveIndex >= this.objectives.length - 1
    );
  }

  isFinalPhase() {
    return _phaseSpec[this.phaseIndex + 1] === undefined;
  }

  hasTrial() {
    return this.trial !== undefined && this.trial !== null;
  }

  getNextTrial(previousTrial) {
    const trialId = this.hasTrial() ? this.trial.id + 1 : 1;
    if (this.currentObjective().trials === undefined) {
      this.currentObjective().trials = [];
    }
    return (this.trial = new Trial(
      this.phaseId,
      this.currentObjective().id,
      trialId,
      this.registrationId,
      this.currentObjective(),
      previousTrial
    ));
  }

  getNextIntroPage() {
    let nextPage = this.introPages[this.introIndex];
    this.introIndex += 1;
    return nextPage;
  }

  getNextObjective() {
    this.objectiveIndex += 1;
    this.trial = null;
    return this.currentObjective();
  }

  currentObjective() {
    return this.objectives[this.objectiveIndex];
  }

  getNextPhase() {
    return new Phase(this.phaseIndex + 1, this.registrationId);
  }

  showFeedback() {
    return (
      this.feedbackFrequency !== undefined &&
      this.trial !== undefined &&
      this.trial !== null &&
      this.trial.id % this.feedbackFrequency === 0 &&
      !this.trial.hasShownFeedback
    );
  }

  getTrialsForFeedback() {
    this.trial.hasShownFeedback = true;
    return this.currentObjective().trials.slice(
      Math.max(
        this.currentObjective().trials.length - this.feedbackFrequency,
        0
      )
    );
  }
}

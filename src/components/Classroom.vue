<template>
  <div class="aspect-wrapper">
    <img
        alt="Classroom"
        class="background-image"
        src="../assets/bg_classroom_image.jpg"
    />
    <img alt="Desk" class="image-desk" src="../assets/bg_desk_image.png"/>
    <img :src="teacherImage" class="image-teacher"/>
    <img :src="studentImage" class="image-student"/>
  </div>
</template>
<script>
export default {
  name: "Classroom",
  props: {
    teacherState: String,
    studentState: String
  },
  computed: {
    teacherImage() {
      let image;
      switch (this.teacherState) {
        case "idle":
          image = require("../assets/teacher_shrug.png");
          break;
      }
      return image;
    },
    studentImage() {
      let image;
      switch (this.studentState) {
        case "angry":
          image = require("../assets/student_sitting_fist_shake.png");
          break;
        default:
          image = require("../assets/student_sitting_idle.png");
      }
      return image;
    }
  }
};
</script>
<style>
.aspect-wrapper {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  height: 0;
  padding-bottom: 56.25%;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

img.background-image {
}

img.image-student {
  margin-top: 0%;
  margin-left: 0%;
  /*transform: scale(1.2);*/
}

img.image-teacher {
  margin-top: 0%;
  margin-left: 0%;
}

img.image-desk {
  margin-top: -0.3%;
  margin-left: -12%;
}
</style>

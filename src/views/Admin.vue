<template>
  <div>
    <h1>Admin page</h1>
    <div v-if="!isLoggedIn">
      <div v-if="wrongPassword">Wrong password</div>
      <input v-model="password" type="password"/>
      <button @click="login">Login</button>
    </div>
    <div v-if="isLoggedIn">
      <a @click="tab = 'password'">Change password</a>
      <a @click="tab = 'status'">Check Status</a>
      <div v-if="tab === 'password'">
        <div>New password:</div>
        <input v-model="newPassword" type="password"/>
        <button @click="setPassword">Set Password</button>
      </div>
      <div v-if="tab === 'status'">
        <button @click="loadStatus">Reload</button>
        <table>
          <tr>
            <th>MTurkId</th>
            <th>PhaseId</th>
            <th>ObjectiveId</th>
            <th>TrialNum</th>
            <th>LastTimestamp</th>
            <th>completed</th>
          </tr>
          <tr v-for="(row, i) in status" :key="i">
            <td>{{ row.MTurkId }}</td>
            <td>{{ row.PhaseId }}</td>
            <td>{{ row.ObjectiveId }}</td>
            <td>{{ row.TrialNum }}</td>
            <td>{{ row.LastTimestamp }}</td>
            <td>{{ row.completed }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import AdminManager from "../services/AdminManager";

export default {
  name: "Admin",
  data() {
    return {
      password: null,
      newPassword: null,
      isLoggedIn: false,
      wrongPassword: false,
      tab: "",
      status: []
    };
  },
  mounted() {
    this.loadStatus();
  },
  methods: {
    loadStatus() {
    },
    login() {
      AdminManager.login(this.password).then(response => {
        if (response) {
          this.isLoggedIn = true;
          this.wrongPassword = true;
        } else {
          this.wrongPassword = true;
        }
      });
    },
    setPassword() {
      AdminManager.setPassword(this.password, this.newPassword);
    }
  }
};
</script>
<style scoped>
a {
  padding-right: 4px;
  text-decoration: underline;
  cursor: pointer;
}
</style>

<template>
  <div class="register-form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Password"
        label-for="input-2"
        description="Password must contain at least 8 characters, including at least 1 lower case, 1 upper case, 1 digit and 1 special character"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Repeat password"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.repeatPassword"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Email address"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="First name" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.firstName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Last name" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.lastName"
          required
        ></b-form-input>
      </b-form-group>

      <div class="form-input-control">
        <b-button type="submit" variant="primary" class="submit-button"
          >Submit</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

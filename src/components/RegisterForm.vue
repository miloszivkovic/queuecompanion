<template>
  <div class="register-form">
    <h2 class="form-title">Sign up</h2>
    <b-form @submit="onSubmit" @reset="onReset">
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

      <b-form-group id="input-group-7" label="Country" label-for="input-7">
        <b-form-select
          id="input-7"
          v-model="form.country"
          :options="countriesOptions"
          required
        >
        </b-form-select>
      </b-form-group>

      <div class="form-input-control">
        <b-button type="submit" variant="primary" class="submit-button"
          >Sign up</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import { countries } from "@/common/country-data-store";
import Vue from "vue";

const countryNames: string[] = [];
countries.forEach((element) => {
  countryNames.push(element.name);
});

declare interface IRegisterForm {
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string | null;
}

export default Vue.extend({
  data(): {
    form: IRegisterForm;
    countriesOptions: string[];
  } {
    return {
      form: {
        username: "",
        password: "",
        repeatPassword: "",
        email: "",
        firstName: "",
        lastName: "",
        country: null,
      },
      countriesOptions: countryNames,
    };
  },
  methods: {
    onSubmit(event: any): void {
      // TODO
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event: any): void {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      this.form.repeatPassword = "";
      this.form.email = "";
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.country = null;
    },
  },
});
</script>

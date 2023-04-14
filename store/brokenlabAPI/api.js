import axios from "axios";
const brokenlabAPI = axios.create({
  baseURL: "https://broken-lab-39355-prod.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_v1_login_create(payload) {
  return brokenlabAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_signup_create(payload) {
  return brokenlabAPI.post(`/api/v1/signup/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return brokenlabAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return brokenlabAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return brokenlabAPI.patch(`/rest-auth/user/`, payload.data);
}

function api_docs_schema_retrieve(payload) {
  return brokenlabAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function rest_auth_login_create(payload) {
  return brokenlabAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return brokenlabAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return brokenlabAPI.post(`/rest-auth/logout/`);
}

function modules_privacy_policy_list(payload) {
  return brokenlabAPI.get(`/modules/privacy-policy/`);
}

function modules_privacy_policy_create(payload) {
  return brokenlabAPI.post(`/modules/privacy-policy/`, payload.data);
}

function rest_auth_registration_create(payload) {
  return brokenlabAPI.post(`/rest-auth/registration/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return brokenlabAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_change_create(payload) {
  return brokenlabAPI.post(`/rest-auth/password/change/`, payload.data);
}

function modules_privacy_policy_retrieve(payload) {
  return brokenlabAPI.get(`/modules/privacy-policy/${payload.id}/`);
}

function modules_privacy_policy_update(payload) {
  return brokenlabAPI.put(`/modules/privacy-policy/${payload.id}/`, payload.data);
}

function modules_privacy_policy_partial_update(payload) {
  return brokenlabAPI.patch(`/modules/privacy-policy/${payload.id}/`, payload.data);
}

function modules_privacy_policy_destroy(payload) {
  return brokenlabAPI.delete(`/modules/privacy-policy/${payload.id}/`);
}

function modules_terms_and_conditions_list(payload) {
  return brokenlabAPI.get(`/modules/terms-and-conditions/`);
}

function modules_terms_and_conditions_create(payload) {
  return brokenlabAPI.post(`/modules/terms-and-conditions/`, payload.data);
}

function modules_payments_payment_sheet_create(payload) {
  return brokenlabAPI.post(`/modules/payments/payment_sheet/`);
}

function rest_auth_password_reset_confirm_create(payload) {
  return brokenlabAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function modules_terms_and_conditions_retrieve(payload) {
  return brokenlabAPI.get(`/modules/terms-and-conditions/${payload.id}/`);
}

function modules_terms_and_conditions_update(payload) {
  return brokenlabAPI.put(`/modules/terms-and-conditions/${payload.id}/`, payload.data);
}

function modules_terms_and_conditions_partial_update(payload) {
  return brokenlabAPI.patch(`/modules/terms-and-conditions/${payload.id}/`, payload.data);
}

function modules_terms_and_conditions_destroy(payload) {
  return brokenlabAPI.delete(`/modules/terms-and-conditions/${payload.id}/`);
}

function rest_auth_registration_verify_email_create(payload) {
  return brokenlabAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

function modules_payments_get_payments_history_retrieve(payload) {
  return brokenlabAPI.get(`/modules/payments/get_payments_history/`);
}

function modules_payments_get_payments_methods_retrieve(payload) {
  return brokenlabAPI.get(`/modules/payments/get_payments_methods/`);
}

export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_payments_payment_sheet_create,
  rest_auth_password_reset_confirm_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_registration_verify_email_create,
  modules_payments_get_payments_history_retrieve,
  modules_payments_get_payments_methods_retrieve
};
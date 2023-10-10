import axios from "axios"
const brokenlabAPI = axios.create({
  baseURL: "https://broken-lab-39355.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return brokenlabAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_buyer_list(payload) {
  return brokenlabAPI.get(`/api/v1/buyer/`)
}
function api_v1_buyer_create(payload) {
  return brokenlabAPI.post(`/api/v1/buyer/`, payload)
}
function api_v1_buyer_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/buyer/${payload.id}/`)
}
function api_v1_buyer_update(payload) {
  return brokenlabAPI.put(`/api/v1/buyer/${payload.id}/`, payload)
}
function api_v1_buyer_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/buyer/${payload.id}/`, payload)
}
function api_v1_buyer_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/buyer/${payload.id}/`)
}
function api_v1_chat_list(payload) {
  return brokenlabAPI.get(`/api/v1/chat/`)
}
function api_v1_chat_create(payload) {
  return brokenlabAPI.post(`/api/v1/chat/`, payload)
}
function api_v1_chat_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/chat/${payload.id}/`)
}
function api_v1_chat_update(payload) {
  return brokenlabAPI.put(`/api/v1/chat/${payload.id}/`, payload)
}
function api_v1_chat_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/chat/${payload.id}/`, payload)
}
function api_v1_chat_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/chat/${payload.id}/`)
}
function api_v1_content_list(payload) {
  return brokenlabAPI.get(`/api/v1/content/`)
}
function api_v1_content_create(payload) {
  return brokenlabAPI.post(`/api/v1/content/`, payload)
}
function api_v1_content_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/content/${payload.id}/`)
}
function api_v1_content_update(payload) {
  return brokenlabAPI.put(`/api/v1/content/${payload.id}/`, payload)
}
function api_v1_content_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/content/${payload.id}/`, payload)
}
function api_v1_content_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/content/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return brokenlabAPI.post(`/api/v1/login/`, payload)
}
function api_v1_payment_list(payload) {
  return brokenlabAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return brokenlabAPI.post(`/api/v1/payment/`, payload)
}
function api_v1_payment_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return brokenlabAPI.put(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_plan_list(payload) {
  return brokenlabAPI.get(`/api/v1/plan/`)
}
function api_v1_plan_create(payload) {
  return brokenlabAPI.post(`/api/v1/plan/`, payload)
}
function api_v1_plan_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/plan/${payload.id}/`)
}
function api_v1_plan_update(payload) {
  return brokenlabAPI.put(`/api/v1/plan/${payload.id}/`, payload)
}
function api_v1_plan_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/plan/${payload.id}/`, payload)
}
function api_v1_plan_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/plan/${payload.id}/`)
}
function api_v1_portfolio_list(payload) {
  return brokenlabAPI.get(`/api/v1/portfolio/`)
}
function api_v1_portfolio_create(payload) {
  return brokenlabAPI.post(`/api/v1/portfolio/`, payload)
}
function api_v1_portfolio_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/portfolio/${payload.id}/`)
}
function api_v1_portfolio_update(payload) {
  return brokenlabAPI.put(`/api/v1/portfolio/${payload.id}/`, payload)
}
function api_v1_portfolio_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/portfolio/${payload.id}/`, payload)
}
function api_v1_portfolio_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/portfolio/${payload.id}/`)
}
function api_v1_profile_list(payload) {
  return brokenlabAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return brokenlabAPI.post(`/api/v1/profile/`, payload)
}
function api_v1_profile_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return brokenlabAPI.put(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function api_v1_project_list(payload) {
  return brokenlabAPI.get(`/api/v1/project/`)
}
function api_v1_project_create(payload) {
  return brokenlabAPI.post(`/api/v1/project/`, payload)
}
function api_v1_project_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/project/${payload.id}/`)
}
function api_v1_project_update(payload) {
  return brokenlabAPI.put(`/api/v1/project/${payload.id}/`, payload)
}
function api_v1_project_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/project/${payload.id}/`, payload)
}
function api_v1_project_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/project/${payload.id}/`)
}
function api_v1_rating_list(payload) {
  return brokenlabAPI.get(`/api/v1/rating/`)
}
function api_v1_rating_create(payload) {
  return brokenlabAPI.post(`/api/v1/rating/`, payload)
}
function api_v1_rating_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/rating/${payload.id}/`)
}
function api_v1_rating_update(payload) {
  return brokenlabAPI.put(`/api/v1/rating/${payload.id}/`, payload)
}
function api_v1_rating_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/rating/${payload.id}/`, payload)
}
function api_v1_rating_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/rating/${payload.id}/`)
}
function api_v1_seller_list(payload) {
  return brokenlabAPI.get(`/api/v1/seller/`)
}
function api_v1_seller_create(payload) {
  return brokenlabAPI.post(`/api/v1/seller/`, payload)
}
function api_v1_seller_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/seller/${payload.id}/`)
}
function api_v1_seller_update(payload) {
  return brokenlabAPI.put(`/api/v1/seller/${payload.id}/`, payload)
}
function api_v1_seller_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/seller/${payload.id}/`, payload)
}
function api_v1_seller_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/seller/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return brokenlabAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_subscription_list(payload) {
  return brokenlabAPI.get(`/api/v1/subscription/`)
}
function api_v1_subscription_create(payload) {
  return brokenlabAPI.post(`/api/v1/subscription/`, payload)
}
function api_v1_subscription_retrieve(payload) {
  return brokenlabAPI.get(`/api/v1/subscription/${payload.id}/`)
}
function api_v1_subscription_update(payload) {
  return brokenlabAPI.put(`/api/v1/subscription/${payload.id}/`, payload)
}
function api_v1_subscription_partial_update(payload) {
  return brokenlabAPI.patch(`/api/v1/subscription/${payload.id}/`, payload)
}
function api_v1_subscription_destroy(payload) {
  return brokenlabAPI.delete(`/api/v1/subscription/${payload.id}/`)
}
function modules_payments_get_payments_history_retrieve(payload) {
  return brokenlabAPI.get(`/modules/payments/get_payments_history/`)
}
function modules_payments_get_payments_methods_retrieve(payload) {
  return brokenlabAPI.get(`/modules/payments/get_payments_methods/`)
}
function modules_payments_payment_sheet_create(payload) {
  return brokenlabAPI.post(`/modules/payments/payment_sheet/`)
}
function modules_privacy_policy_list(payload) {
  return brokenlabAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return brokenlabAPI.post(`/modules/privacy-policy/`, payload)
}
function modules_privacy_policy_retrieve(payload) {
  return brokenlabAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return brokenlabAPI.put(`/modules/privacy-policy/${payload.id}/`, payload)
}
function modules_privacy_policy_partial_update(payload) {
  return brokenlabAPI.patch(`/modules/privacy-policy/${payload.id}/`, payload)
}
function modules_privacy_policy_destroy(payload) {
  return brokenlabAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function modules_terms_and_conditions_list(payload) {
  return brokenlabAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return brokenlabAPI.post(`/modules/terms-and-conditions/`, payload)
}
function modules_terms_and_conditions_retrieve(payload) {
  return brokenlabAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return brokenlabAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return brokenlabAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return brokenlabAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return brokenlabAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return brokenlabAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return brokenlabAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return brokenlabAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return brokenlabAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return brokenlabAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return brokenlabAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return brokenlabAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return brokenlabAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return brokenlabAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return brokenlabAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_buyer_list,
  api_v1_buyer_create,
  api_v1_buyer_retrieve,
  api_v1_buyer_update,
  api_v1_buyer_partial_update,
  api_v1_buyer_destroy,
  api_v1_chat_list,
  api_v1_chat_create,
  api_v1_chat_retrieve,
  api_v1_chat_update,
  api_v1_chat_partial_update,
  api_v1_chat_destroy,
  api_v1_content_list,
  api_v1_content_create,
  api_v1_content_retrieve,
  api_v1_content_update,
  api_v1_content_partial_update,
  api_v1_content_destroy,
  api_v1_login_create,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_plan_list,
  api_v1_plan_create,
  api_v1_plan_retrieve,
  api_v1_plan_update,
  api_v1_plan_partial_update,
  api_v1_plan_destroy,
  api_v1_portfolio_list,
  api_v1_portfolio_create,
  api_v1_portfolio_retrieve,
  api_v1_portfolio_update,
  api_v1_portfolio_partial_update,
  api_v1_portfolio_destroy,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_retrieve,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_destroy,
  api_v1_project_list,
  api_v1_project_create,
  api_v1_project_retrieve,
  api_v1_project_update,
  api_v1_project_partial_update,
  api_v1_project_destroy,
  api_v1_rating_list,
  api_v1_rating_create,
  api_v1_rating_retrieve,
  api_v1_rating_update,
  api_v1_rating_partial_update,
  api_v1_rating_destroy,
  api_v1_seller_list,
  api_v1_seller_create,
  api_v1_seller_retrieve,
  api_v1_seller_update,
  api_v1_seller_partial_update,
  api_v1_seller_destroy,
  api_v1_signup_create,
  api_v1_subscription_list,
  api_v1_subscription_create,
  api_v1_subscription_retrieve,
  api_v1_subscription_update,
  api_v1_subscription_partial_update,
  api_v1_subscription_destroy,
  modules_payments_get_payments_history_retrieve,
  modules_payments_get_payments_methods_retrieve,
  modules_payments_payment_sheet_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

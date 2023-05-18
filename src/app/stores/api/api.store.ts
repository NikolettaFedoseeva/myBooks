// import {computed, ref} from "vue";
// import {defineStore} from "pinia";
// import UserModel from "./mappers/models/UserModel";
// import mapInitCurrentSprintListFromApi from "@/app/stores/api/mappers/FromApi/mapGetUserfromApi";
// const wsUrl = "ws://pm2.tirscript.com/websocket";
//
// export const useApiStore = defineStore("layoutApi", () => {
//     const api = ref<apiDataSource>();
//
//     /** текущий пользователь */
//     const user = ref<UserModel>();
//
//     const fetchApi = () => {
//         if (!api.value) {
//             api.value = new apiDataSource(wsUrl);
//             api.value.webApiService.microFront = true;
//             api.value.webApiService.init();
//         }
//     };
//     const getUser = computed(() => {
//         return user.value;
//     });
//     const initUser = async () => {
//         api.value.UsersService.getCurrentUserAsync()
//             .then((res) => {
//                 user.value = mapInitCurrentSprintListFromApi(res);
//             })
//             .catch((ex) => {
//                 error("Ошибка получения пользователя");
//             });
//     };
//
//     return {fetchApi, api, initUser, getUser};
// });

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/General/Home.vue'
import FindCounsellor from '@/views/Patient/FindCounsellor.vue'
import About from '@/views/General/About.vue'
import HelpResources from '@/views/General/HelpResources.vue'
import HelpResourcesAdmin from '@/views/Counsellor/HelpResourcesAdmin.vue'
import AdminLogin from '@/views/Counsellor/AdminLogin.vue'
import PatientLogin from '@/views/Patient/PatientLogin.vue'
import PatientProfile from '@/views/Patient/PatientProfile.vue'
import CounsellorProfile from '@/views/Counsellor/CounsellorProfile.vue'
import MyPatients from '@/views/Counsellor/MyPatients.vue'
import AllAppointments from '@/views/Patient/AllAppointments.vue'
import PatientRecords from '@/views/Counsellor/PatientRecords.vue'
import DailyUserView from '@/views/DailyUserView.vue'
import DailyCounsellorView from '@/views/DailyCounsellorView.vue'
import CounsellorReviews from '@/views/Counsellor/CounsellorReviews.vue'
import RateCounsellor from '@/views/Patient/RateCounsellor.vue'
import NotFound from '@/views/General/NotFound.vue'
const routes = [
 {
 path: '/',
 name: 'Home',
 component: Home
 },
 {
 path: '/about',
 name: 'About',
 component: About
 },
 {
    path: '/findCounsellor',
    name: 'FindCounsellor',
    component: FindCounsellor
},
{
    path: '/helpResources',
    name: 'HelpResources',
    component: HelpResources
},
{
    path: '/helpResourcesAdmin',
    name: 'HelpResourcesAdmin',
    component: HelpResourcesAdmin
},
{
    path: '/adminLogin',
    name: 'AdminLogin',
    component: AdminLogin
},
{
    path: '/patientLogin',
    name: 'PatientLogin',
    component: PatientLogin
},
{
    path: '/patientProfile',
    name: 'PatientProfile',
    component: PatientProfile
},
{
    path: '/counsellorProfile',
    // path: '/counsellorProfile/:id',
    name: 'CounsellorProfile',
    component: CounsellorProfile
},
{
    path: '/myPatients',
    name: 'MyPatients',
    component: MyPatients
},
{
    path: '/allAppointments',
    name: 'AllAppointments',
    component: AllAppointments
},
{
    path: '/patientRecords',
    name: 'PatientRecords',
    component: PatientRecords
},
{
    path: '/dailyUserView',
    name: 'DailyUserView',
    component: DailyUserView
},
{
    path: '/dailyCounsellorView',
    name: 'DailyCounsellorView',
    component: DailyCounsellorView
},
{
    path: '/counsellorReviews',
    name: 'CounsellorReviews',
    component: CounsellorReviews
},
{
    path: '/rateCounsellor',
    name: 'RateCounsellor',
    component: RateCounsellor
},
{
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
}
]
const router = createRouter({
 history: createWebHistory(),
 routes
})
export default router
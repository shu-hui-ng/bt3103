<template>
  <!-- This component templates the user's previous sessions (seen in Patients records, User's profile page ) -->
   <h3>Past Appointments</h3>
    
      <div class = "bgBlock">
        <table id="table2">
          <!-- <div v-if = "user"> -->
      <!-- would ultimately have some kind of for loop to pull the appropriate fields from Firebase Sessions collection -->
            <tr class=header> 
            <th>Date</th> 
            <th>Counsellor</th>
            <th>Link</th>
            <th v-if="user">Rating</th>
            <th v-else>Notes</th> 
            </tr>
             <tr>
                <td>10/10/21</td>
                <td>Mdm Lim</td>
                <td>Link expired</td>
                <td v-if="user">Rate session</td>
                <td v-else>Having problems with...</td>
            </tr>
            <tr>
                <td>11/10/21</td>
                <td>Mr Tan</td>
                <td>Link expired</td>
                <td v-if="user">★★★☆☆</td>
                <td v-else>Rose was angry because...</td>
            </tr>
          <!-- </div>  -->

          <!-- <div v-else>   -->
            <!-- if viewed by counsellor -->
              <!-- <tr class=header> 
            <th>Date</th> 
            <th>Counsellor</th>
            <th>Notes</th>
            </tr>
             <tr>
                <td>10/10/21</td>
                <td>Mdm Lim</td>
                <td>Having problems with...</td>
            </tr>
          </div>  -->
      </table>
      </div>
</template>

<script>
export default {
  name: "UserPreviousSessions"
}
</script>

<style scoped>
#table2{
    /* width: 630px; */
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    background-color:rgb(242, 242, 243);
}
th,td { 
    /* background-color: whitesmoke;  */
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: center;
}

tr:nth-child(even){
    background-color: #e3edee;
}

.header {
    background-color: black;
}

th{
    color: white;
}
</style>
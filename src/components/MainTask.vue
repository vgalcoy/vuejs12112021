<template>

    <div id=head>
        <img src="../assets/img_cover_approval_center.png" alt="" width="360">
    </div>
    <div id=container>
        
            <button id=card @click.prevent="onPostsClick()">
                <div id=imgscope> <img src="../assets/img_outstanding_approval.png" alt="" width="84"></div>
                <div class=carddalem> 
                <h1>38</h1>
                <p>Outstanding Approval</p> 
                </div>
            </button>
            <div class =text> 
            <h1>Menunggu Persetujuan</h1>
            <p>Segera tindak lanjuti permintaan anda</p>
            </div>
            <div class=list>
                <div id=imgg></div>
                <h2> IT Request Tracking </h2>
                <div class="request">
                    <h3>30</h3>
                    <p>Request</p>
                </div>
            </div>
            <div class=list>
                <div id=imggg></div>
                <h2> Training Request </h2>
                <div class="request">
                    <h3>08</h3>
                    <p>Request</p>
                </div>
            </div>
    </div>


</template>

<script>
export default {
  name: 'MainTask',
  props: {
    msg: String
  },
  methods: {
      onPostsClick() {
          this.$router.push('/outstanding');
      },
  },
}
</script>

<style scoped>
#imggg{
    position: static;
    width: 44px;
    height: 44px;
    left: 0px;
    top: 0px;
    background: #F1F5FC;
    border-radius: 14px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
    margin-top: 34px;
 background: url(../assets/ic_training_request.png);
    background-size: 44px;
    background-position: center;
}
#request{
    /* request */

/* Auto Layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 52px;
height: 38px;
left: 264px;
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 0px;
}
.request p{
    
position: static;
left: 0%;
right: 0%;
top: 57.89%;
bottom: 0%;

/* caption/caption 2 */
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-align: right;

/* neutral/black 80 */
color: #6A6A6A;


/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 2px 0px;
}
.request h3{
    position: static;
left: 0%;
right: 0%;
top: 0%;
bottom: 47.37%;

/* headline/headline 4 */
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
text-align: right;

/* secondary/red 100 */
color: #D92534;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 2px 0px;
}
.list h2{

position: static;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* body/body 2 */
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

/* neutral/black 100 */
color: #171717;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: -28px 0px;
    }
#imgg{
    position: static;
    width: 44px;
    height: 44px;
    left: 0px;
    top: 0px;
    background: #F1F5FC;
    border-radius: 14px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
    margin-top: 34px;
    background: url(../assets/ic_it_request_tracking.png);
    background-size: 44px;
    background-position: center;
}
#list{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 7px;

position: static;
width: 330px;
height: 64px;
left: 0px;
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 8px 0px;
}
.text h1{
   position: static;
    width: 158px;
    height: 19px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #171717;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: 32px;
    margin-left: 16px;
    margin-bottom: 0;
}
.text p{
position: static;
    width: 215px;
    height: 16px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #6A6A6A;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-top: 2px;
    margin-left: 4px;
}
#text{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 215px;
height: 37px;
left: 0px;
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;
}
.carddalem p{
    position: static;
    left: 0%;
    right: 0%;
    top: 69.81%;
    bottom: 0%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #171717;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 2px 0px;
    padding-right: 16px;
}
.carddalem h1{
    position: static;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: right;
    color: #146BB8;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 2px 0px;
    padding-top: 15px;
    padding-right: 16px;
}
#carddalem{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 185px;
height: 53px;
left: 127px;
top: 15px;


}
#imgscope{
    position: absolute;
width: 84px;
height: 70px;
left: 26px;
top: 42px;
}
#back{
    position: relative;
width: 360px;
height: 640px;

/* neutral/primary/white 100 */
background: #FFFFFF;
}
#head{
    position: absolute;
width: 360px;
height: 198px;
left: 0px;
top: 0px;

/* secondary/blue 100 */
background: #146BB8;
}
#container{
    position: absolute;
width: 360px;
height: 475px;
left: 0px;
top: 165px;

/* neutral/primary/white 100 */
background: #FFFFFF;
border-radius: 30px 30px 0px 0px;
}
#pad{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 328px;
height: 85px;
left: 0px;
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 32px 0px;
}
#card{
    position: static;
width: 328px;
height: 85px;
left: 0px;
top: 0px;

background: #F1F5FC;
border-radius: 12px;

/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0 15px;
margin-top: 34px;
    overflow: hidden;   
}
</style>
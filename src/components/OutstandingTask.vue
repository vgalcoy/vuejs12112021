<template>
    <div class="main">
        <div class="cover">
            <a class="back" href="/main"><img id="ic-back" src="../assets/back.png" alt=""></a>
            <a class="search" href="/outstanding"> <img id="search" src="../assets/search.png" alt=""></a>
        </div>
        <div class="content">
            <div class="headline">
                <h2>Outstanding Approval</h2>
              
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OutstandingTask',
  
}
</script>

<style scoped>
    .main{
        position: absolute;
        left: 0;
        top: 0;
        width: 360px;
        height: auto;
    }
    .cover {
        background-image: url(../assets/cover2.png);
        width: 360px;
        height: 90px;
        left: 0px;
        top: 0px;
        z-index: 1;
    }
    .cover .back {
    position: absolute;
    left: 16px;
    top: 16px;
    }
    .back #ic-back{
    position: absolute;
    width: 16px;
    height: 16px;
    }
    .cover .search{
        position: absolute;
        top: 16px;
        right: 16px;
    }
    .search #search{
        width: 16px;
        height: 16px;
    }
    .content{
        position: absolute;
        width: 360px;
        height: 1000px;
        background-color: white;
        z-index: 2;
        top: 56px;
        left: 0;
        border-radius: 30px 30px 0px 0px;
    }
    .content .headline{
        position: absolute;
        left: 16px;
        top: 34px;
        display: flex;
        flex-direction: row;
    }
    .headline h2{
    width: 195px;
    height: 23px;
    left: 0px;
    top: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #171717;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
    }
  
    
</style>
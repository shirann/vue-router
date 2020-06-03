<template>
    <div>
        <div>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
        <div class="row">
            <div class="col-md-4">
                <ul>
                    <li><a href="javascript:;">haha</a></li>
                </ul>
            </div>
            <div class="col-md-6">
                <img src="../assets/luffy.jpg" alt="" width="550px">
            </div>
            <div class="col-md-2">
                <h3>热门评论</h3>
                <ul>
                    <li>很好听</li>
                    <li>很好听</li>
                    <li>很好听</li>
                    <li>很好听</li>
                    <li>很好听</li>
                    <li>很好听</li>
                    <li>很好听</li>
                </ul>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Music"
    }
</script>

<style scoped>
 .col-md-6 {
     overflow: hidden;
 }
</style>
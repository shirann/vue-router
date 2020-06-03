<template>
    <div id="app">
        <div class="row">
            <div class="col-md-2">
                <ul class="list-group">
                    <li class="list-group-item">
                        <router-link to="/home">项目简介</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/music">音乐素材</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/picture">图片素材</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/video">视频素材</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/logo">logo</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/others">其他</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'App'
    }
</script>

<style>
    li {
        list-style: none;
    }
</style>

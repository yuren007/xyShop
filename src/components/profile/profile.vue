
<template>
    <div class="profile_page">
    	<head-top :head-title="'我的'" goBack="true"></head-top>
        <article>
            <!-- 头部用户信息 -->
            <section class="profile-number">
                <router-link to="/login" class="profile-link">
                    <span class="arrow">
                        <svg class="arrow-svg" fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                    <span>注册/登录</span>
                </router-link>
            </section>
            <!-- 列表内容 -->
            <section class="info-data">
                <ul class="clear">
                    <router-link to="/balance" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>100</b>元</span>
                        <span class="info-data-bottom">我的余额</span>
                    </router-link>
                    <router-link to="/benefit" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>10</b>个</span>
                        <span class="info-data-bottom">我的优惠</span>
                    </router-link>
                    <router-link to="/points" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>50</b>分</span>
                        <span class="info-data-bottom">我的积分</span>
                    </router-link>
                </ul>
            </section>
        </article>
    	<footer-guide></footer-guide>
    </div>    
</template>

<script>

import headTop from '../header/header'
import footerGuide from '../footerguide/footerguide'
export default {
	data(){
        return {
        	
        }
    },
    components: {
    	headTop,
    	footerGuide
    }
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .profile-number{
        padding-top:1.95rem;
        .profile-link{
            display:block;
            display:flex;
            box-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background:$blue;
            padding: .666667rem .6rem;
            .privateImage{
                display:inline-block;
                @include wh(2.5rem,2.5rem);
                border-radius:50%;
                vertical-align:middle;
                .privateImage-svg{
                    background:$fc;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .user-info{
                margin-left:.48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p{
                    font-weight:700;
                    @include sc(.8rem,$fc);
                    .user-icon{
                        @include wh(0.5rem,0.75rem);
                        display:inline-block;
                        vertical-align:middle;
                        line-height:0.75rem;
                        .icon-mobile{
                            @include wh(100%,100%);
                        }
                    }
                    .icon-mobile-number{
                        display:inline-block;
                        @include sc(.57333rem,$fc);

                    }
                }

            }
            .arrow{
                @include wh(.46667rem,.98rem);
                display:inline-block;
                svg{
                   @include wh(100%,100%);
                }
            }
        }
   }
</style>

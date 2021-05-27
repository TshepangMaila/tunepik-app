<template>
	<div class="wrapper-view">
		<div class="user-wrap-cover"></div>
		<div class="row scroll-wrapper">
			
			<div class="col-lg-8">

				<div class="">

			    <div class="card no-border card-wrapper">
			      
			      <div class="card-header">
			        <user-nav-builder :user="user"></user-nav-builder>
			      </div>

				    <div class="card-body no-border">
				       <user-info-builder :user="user">
				         <user-follows-builder :user="user"></user-follows-builder>
				       </user-info-builder>

				       <div class="space-small"></div>

				       <center>
				         <user-stats-builder :user="user"></user-stats-builder>
				       </center>
				    </div>

			    </div>

			     <user-extended-view :user="user"></user-extended-view>

			  </div>

			</div>
			<div class="col-lg-4">
				
				<div class="card no-border">
					
					<div class="card-header">TPIF</div>
					<div class="card-body no-border"></div>

				</div>

			</div>

		</div>
 </div>
	
</template>

<script type="text/javascript">

	 import UserInfoBuilder from '../../builders/profileBuilders/UserInfoBuilder'
	 import UserFollowsBuilder from '../../builders/profileBuilders/UserFollowsBuilder'
	 import UserExtendedView from '../../builders/profileBuilders/UserExtendedView'
	 import UserStatsBuilder from '../../builders/profileBuilders/UserStatsBuilder'
	 import UserNavBuilder from '../../builders/profileBuilders/UserNavBuilder'

	export default {
		name : "DesktopProfileViewTwo",
		data : () => ({}),
		props : ['user'],
		components : {
			UserInfoBuilder,
			UserFollowsBuilder,
			UserExtendedView,
			UserStatsBuilder,
			UserNavBuilder
		}

	};

</script>

<style type="text/css" scoped>
	
	.user-wrap-cover{
    border : .04em solid rgba(211, 211, 211, .100);
    height : 160px;
    background-color: #fff;
  }

  .card-wrapper{
  	border: .04em solid rgba(211, 211, 211, .100);
  }

  .scroll-wrapper{
    width : 99%;
    position : relative;
    top : -40px;
    left : 2px;
  }

  .col-lg-4,
  .col-lg-10{
  	margin: 0px;
  	padding: 0px;
  }

  .card-header{
    padding : 0;
  }

</style>
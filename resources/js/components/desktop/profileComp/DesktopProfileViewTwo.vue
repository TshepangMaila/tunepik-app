<template>

	<div class="wrapper-view row">
		
		<div class="col-lg-8">

			<div class="user-wrap-cover"></div>

			<div class="scroll-wrapper">

		    <div class="card">
		      
		      <div class="card-header">
		        <user-nav-builder :user="user"></user-nav-builder>
		      </div>

			    <div class="card-body">
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
			
			<div class="card no-border grey-matter">
				
				<div class="card-header">TPIF</div>
				<div class="card-body no-border"></div>

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
    border : .05em solid lightgrey;
    height : 250px;
  }

  .scroll-wrapper{
    width : 90%;
    position : relative;
    top : -100px;
    left : 45px;
  }

  .card-header{
    padding : 0;
  }

</style>
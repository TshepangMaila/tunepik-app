

export const state = {

	stories : {
		loading : true,
		message : '',
		error   : false,
		stories : []
	}

}

export const getters = {
	stories : state => state.stories
}

export const mutations = {
	setLoading : (state, loading) => state.stories.loading = loading,
	setStories : (state, data) => {

		

	}
}

export const actions = {

}
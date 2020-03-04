		var app = new Vue({
			el :"#app",
			data :{
 				newTask :{
			        description: '',
			        completed: false
			    },
				tasks :[
					{ id : 1 , description :'Lean vue js', completed : true },
					{ id : 2 , description :'Master css', completed : false },
					{ id : 3 , description :'Master laravel', completed : false },
					{ id : 4 , description :'Master Apis', completed : false }
				]
			},
			methods :{
				addTask(){
					this.tasks.push({id : ++this.tasks.length , description : this.newTask.description , completed : false});
					this.newTask.description = '';
				},
				toggleClass(task){
					task.completed = !task.completed ;
				}
			},
			computed :{
				filterCompletedTasks(){
					return this.tasks.filter(task => task.completed);
				},
				filterIncompletedTasks(){
					return this.tasks.filter(task => !task.completed);
				}
			}
		})

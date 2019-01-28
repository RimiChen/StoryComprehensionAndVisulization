// Revealing module pattern
var visualAppMenu = (function () {

  /*
	initial starting menu
	*/
  var initialDashboard = function() {
		console.log("Starting Menu")
		//append buttons in here
		$( "#buttonFrame" ).remove();
		$( "div" ).remove( "#buttonFrame" );
	
		var canv = document.createElement('buttonFrame');
		canv.id = 'buttonFrame';
		document.body.appendChild(canv);


		drawCanvas("ComprehensionDemo", "QA demo")
		clickCanvas("ComprehensionDemo")
		drawCanvas("StoryLine", "Story Line")
		clickCanvas("StoryLine")
		drawCanvas("Scene", "Scene")
		clickCanvas("Scene")


	};
  function drawCanvas( elementName, contentText){
    var newButton = {
        canvas : document.createElement("canvas"),
        draw : function() {
            this.canvas.id = "button_"+elementName;
            this.canvas.width = 150;
						this.canvas.height = 50;
						this.context = this.canvas.getContext("2d");
						this.context.font = "30px Arial";
						this.context.fillStyle = "rgb(71, 71, 236)";
						this.context.textAlign = "center";
						this.context.fillText(contentText, this.canvas.width/2, this.canvas.height/2); 
						
						var target_div = document.getElementById("buttonFrame"); 
						target_div.appendChild(this.canvas);				
        }
    }
		
		//draw new buttons
    newButton.draw();
	};
	
  function clickCanvas(elementName){
    var buttonName = "#button_"+elementName;
		console.log("Now: Button #"+elementName);
    $(document).ready(function(){
        
      $(buttonName).click(function(){
        // open next page
	  		console.log("Now: button #"+elementName);
		  	window.location.href='/'+elementName;
		  	//call pyhton function here
      });
		});
	};
  return {
    initialDashboard: initialDashboard
  }
})();
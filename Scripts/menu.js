function myFunction() {


				var videocontainer = document.getElementById("vid");
				var videosource = document.getElementById("mp4video");
				var el = document.getElementById("skipMessage");
                                var A1 = document.getElementById("A1");
				var A2 = document.getElementById("A2");
				var A1_1 = document.getElementById("A1_1");
				var A1_2 = document.getElementById("A1_2");
                                var A1_1_1 = document.getElementById("A1_1");
				var A1_1_2 = document.getElementById("A1_2");
                                var A1_1_3 = document.getElementById("A1_1_3");
				var A1_1_4 = document.getElementById("A1_1_4");
				var A1_1_4_1 = document.getElementById("A1_1_4_1");
				var A1_1_4_2 = document.getElementById("A1_1_4_2");
				var A1_1_4_1_1 = document.getElementById("A1_1_4_1_1");
				var A1_1_4_1_2 = document.getElementById("A1_1_4_1_2");
				var A1_1_4_2_1 = document.getElementById("A1_1_4_2_1");
				var A1_1_4_2_2 = document.getElementById("A1_1_4_2_2");
				var x1 = document.getElementById("layer1");
				var x2 = document.getElementById("layer2");
				var x3 = document.getElementById("layer3");
				var x4 = document.getElementById("layer4");
				var x5 = document.getElementById("layer5");
				var x6 = document.getElementById("layer6");
				var x7 = document.getElementById("layer7");
				var FINAL = document.getElementById("FINAL");
				var FINAL1 = document.getElementById("FINAL1");
				var FINAL2 = document.getElementById("FINAL2");
				var FINAL3 = document.getElementById("FINAL3");
                                
				var newmp4;


	document.getElementById("single").style.display="none"; 

    document.getElementById("vid").play();
	
	document.getElementById("vid").addEventListener("timeupdate", function(){

						    if(this.currentTime >= 113.6) {

							
							document.getElementById("choiceA").style.display="block";
							
							document.getElementById("vid").pause();

                                                        document.getElementById("layer1").style.display="block";

						}

                                                if (window.getComputedStyle(x1).display === "block") {

						if((this.currentTime >= 25.4) && (this.currentTime <= 26.2)) {
						
						this.currentTime=26.3;
						document.getElementById("vid").pause();
						document.getElementById("skipMessage").style.display="block";
						}
						
						if((this.currentTime >= 31.2) && (this.currentTime <= 32.2)) {
							
									videocontainer.pause();
									document.getElementById("choiceA1").style.display="block";
							
						}
                                                }

                                                if (window.getComputedStyle(x2).display === "block") {

						if((this.currentTime >= 4.5) && (this.currentTime <= 5.2)) {
						
						this.currentTime=5.3;
						videocontainer.pause();
						document.getElementById("skipMessage").style.display="block";
						}
						
						if((this.currentTime >= 10) && (this.currentTime <= 12.5)) {
							document.getElementById("choiceA1_1").style.display="block";
						}
						if(this.currentTime >= 12.6) {	
							document.getElementById("choiceA1_1").style.display="none";
						}
                                                }
		
						if (window.getComputedStyle(x3).display === "block") {

						if ((this.currentTime >= 1.5) && (this.currentTime <= 2.5)) {
							
						this.currentTime=2.6;
						videocontainer.pause();
						document.getElementById("choiceA1_1_4").style.display="block";
						}
                                                }
		
						if (window.getComputedStyle(x4).display === "block") {

						if ((this.currentTime >= 7) && (this.currentTime <=9.5)) {
							
						document.getElementById("choiceA1_1_4_1").style.display="block";
						}
						}
		
						if (window.getComputedStyle(x5).display === "block") {

						if ((this.currentTime >= 8) && (this.currentTime <=10.5)) {
							
						document.getElementById("choiceA1_1_4_2").style.display="block";
						}
						}
		
						if (window.getComputedStyle(x6).display === "block") {

						if ((this.currentTime >= 2.5) && (this.currentTime <=3.3)) {
						
						this.currentTime=3.4;
						videocontainer.pause();
						document.getElementById("skipMessage").style.display="block";
						}
							
						if ((this.currentTime >= 4.7) && (this.currentTime <=5.5)) {
							
						this.currentTime=5.6;							
						videocontainer.pause();
						document.getElementById("skipMessage").style.display="block";
						}
							
						if (this.currentTime >= 9.5) {
							
						videocontainer.pause();
						document.getElementById("FINAL").style.display="block";
						}
						}
		
						if (window.getComputedStyle(x7).display === "block") {

						if ((this.currentTime >= 1.1) && (this.currentTime <=2.0)) {
							
						this.currentTime=2.1;
						document.getElementById("skipMessage").style.display="block";
						}
						}

                                                if (el.addEventListener) {
								el.addEventListener("click", function() {
									
									this.currentTime+=1;
									videocontainer.play();
									document.getElementById("skipMessage").style.display="none";
									
									
								}, false);
						}

                                                if (A1.addEventListener) {
							A1.addEventListener("click", function() {

								this.currentTime=115;
								document.getElementById("choiceA").style.display="none";

								newmp4 = "videos/A1.mp4";
								

									videocontainer.pause();
									videosource.setAttribute("src", newmp4);
									videocontainer.load();
									videocontainer.play();
                                                                        document.getElementById("layer1").style.display="block";

								}, false);
							}

						if (A2.addEventListener) {
							A2.addEventListener("click", function() {
								
										
								document.getElementById("choiceA").style.display="none";

										newmp4 = "videos/A2.mp4";

											videocontainer.pause();
											videosource.setAttribute("src", newmp4);
											videocontainer.load();
											videocontainer.play();
                                                                                        document.getElementById("layer1").style.display="block";

									}, false);
						}
	    					
						if (A1_1.addEventListener) {
								A1_1.addEventListener("click", function() {
									
									this.currentTime=32.3;
									document.getElementById("choiceA1").style.display="none";
									document.getElementById("vid").play();
									
									newmp4 = "videos/A1_1.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer1").style.display="none";
										document.getElementById("layer2").style.display="block";
									
								}, false);
							}
							
							
							
							if (A1_2.addEventListener) {
								A1_2.addEventListener("click", function() {
									
									this.currentTime=32.3;
									document.getElementById("choiceA1").style.display="none";
									document.getElementById("vid").play();
									
									newmp4 = "videos/A2.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
									
								}, false);
							}
		
							if (A1_1_1.addEventListener) {
								A1_1_1.addEventListener("click", function() {

									document.getElementById("choiceA1_1").style.display="none";
									
								}, false);
							}

                                                        if (A1_1_2.addEventListener) {
								A1_1_2.addEventListener("click", function() {

									document.getElementById("choiceA1_1").style.display="none";
									
								}, false);
							}

                                                        if (A1_1_3.addEventListener) {
								A1_1_3.addEventListener("click", function() {

									document.getElementById("choiceA1_1").style.display="none";
									
								}, false);
							}

                                                        if (A1_1_4.addEventListener) {
								A1_1_4.addEventListener("click", function() {

									document.getElementById("choiceA1_1").style.display="none";
									
									newmp4 = "videos/A1_1_4.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer2").style.display="none";
										document.getElementById("layer3").style.display="block";
									
								}, false);
							}
		
							if (A1_1_4_1.addEventListener) {
								A1_1_4_1.addEventListener("click", function() {

									document.getElementById("choiceA1_1_4").style.display="none";
									
									newmp4 = "videos/A1_1_4_1.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer3").style.display="none";
										document.getElementById("layer4").style.display="block";
									
								}, false);
							}
		
							if (A1_1_4_2.addEventListener) {
								A1_1_4_2.addEventListener("click", function() {

									document.getElementById("choiceA1_1_4").style.display="none";
									
									newmp4 = "videos/A1_1_4_2.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer3").style.display="none";
										document.getElementById("layer5").style.display="block";
									
								}, false);
							}
		
							if (A1_1_4_1_1.addEventListener) {
								A1_1_4_1_1.addEventListener("click", function() {

									document.getElementById("choiceA1_1_4_1").style.display="none";
									
									newmp4 = "videos/A1_1_x_.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer4").style.display="none";
										document.getElementById("layer7").style.display="block";
									
								}, false);
							}
		
							if (A1_1_4_1_2.addEventListener) {
								A1_1_4_1_2.addEventListener("click", function() {

									document.getElementById("choiceA1_1_4_1").style.display="none";
									
									newmp4 = "videos/FINAL.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer4").style.display="none";
										document.getElementById("layer6").style.display="block";
									
								}, false);
							}
		
							if (A1_1_4_2_1.addEventListener) {
								A1_1_4_2_1.addEventListener("click", function() {

									document.getElementById("choiceA1_1_4_2").style.display="none";
									
									newmp4 = "videos/A1_1_x_.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer5").style.display="none";
										document.getElementById("layer7").style.display="block";
									
								}, false);
							}
		
							if (A1_1_4_2_2.addEventListener) {
								A1_1_4_2_2.addEventListener("click", function() {

									document.getElementById("choiceA1_1_4_2").style.display="none";
										document.getElementById("layer5").style.display="none";
									
								}, false);
							}
		
							if (FINAL1.addEventListener) {
								FINAL1.addEventListener("click", function() {

									document.getElementById("FINAL").style.display="none";
									
									newmp4 = "videos/FINAL1.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer6").style.display="none";
									
								}, false);
							}
		
							if (FINAL2.addEventListener) {
								FINAL2.addEventListener("click", function() {

									document.getElementById("FINAL").style.display="none";
									
									newmp4 = "videos/FINAL2.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer6").style.display="none";
									
								}, false);
							}
		
							if (FINAL3.addEventListener) {
								FINAL3.addEventListener("click", function() {

									document.getElementById("FINAL").style.display="none";
									
									newmp4 = "videos/FINAL3.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
										document.getElementById("layer6").style.display="none";
									
								}, false);
							}
});
}

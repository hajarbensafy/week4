class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  const video1 = new Video("JavaScript Basics", "CodeMaster", 300);
  video1.watch();
  
  const video2 = new Video("CSS Animations", "DesignGuru", 420);
  video2.watch();
  
  const videoData = [
    { title: "React Tutorial", uploader: "FrontEndPro", time: 600 },
    { title: "Node.js Crash Course", uploader: "BackEndDev", time: 720 },
    { title: "Python for Beginners", uploader: "DataScientist", time: 540 },
    { title: "Machine Learning Basics", uploader: "AIEnthusiast", time: 900 },
    { title: "Web Security Fundamentals", uploader: "CyberGuard", time: 480 }
  ];
  
  const videoInstances = videoData.map(data => new Video(data.title, data.uploader, data.time));
  
  videoInstances.forEach(video => video.watch());
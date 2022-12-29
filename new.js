let track_video = document.querySelector('#track_video');
let global_index_no = 0;
let playing_song = false;
let playing_video = false;
let theme_title = document.querySelector('#theme-title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show')
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let volume_icon = document.querySelector('#volume_icon');
let pause_gif = document.querySelector('#pause-gif');
let pause_text = document.querySelector('#pause-text');


//create a audio Element

let track = document.createElement('audio');
let global_music_index = 0;

let isMuted = false;

//All videos list
let all_videos = [
    {
        name: "romance",
        path: "videos/romance.mov",
        music: ["./music/romance/music_romance_Barsaat - Bheegi Bheegi Raaton Mein_Adnan Sami_Kabhi To Nazar Milao.mp3",
                "./music/romance/music_romance_Chura Liya Hai Tumne Jo Dil Ko (Eng Sub) [Full Video Song] (HD) With Lyrics - Yaadon Ki Baaraat.mp3",
                "./music/romance/music_romance_Ek Ladki ko dekha - Full Video HD _ 1942 A love story _ Anil Kapoor _ Manisha Koirala (1).mp3",
                "./music/romance/music_romance_Humein Tumse Pyar Kitna _ Sanam.mp3",
                "./music/romance/music_romance_Kora Kagaz Tha Yeh Man Mera 4K Video Song _ Lata Mangeshkar_ Kishore Kumar _ Aradhana_ Rajesh Khanna.mp3",
                "./music/romance/music_romance_Likhe Jo Khat Tujhe Woh Teri Yaad Mein  [HD] 1080P.mp3",

           
            ]
    },
    {
        name: "sad",
        path: "videos/sad.mp4",
        music: ["./music/sad/music_sad_Guide 1965 Din dhal jaye hai raat na.mp3",
        "./music/sad/music_sad_aaja piya tohe pyar du_Baharon Ke Sapne1967_AshaParekh& Rajesh Khanna_Lata_Majrooh_R D Burman _a tri.mp3",
        "./music/sad/music_sad_Jis Gali Mein Tera Ghar 4K Song _ Mukesh _ Rajesh Khanna _ Kati Patang _Classic Bollywood Video Song.mp3",
        "./music/sad/music_sad_Kya Hua Tera Wada in HD.mp3",
        "./music/sad/music_sad_Lata Mangeshkar - Kahin Door Jab Din Dhal Jaye (Official Audio).mp3",
        "./music/sad/music_sad_Lagi Aaj Sawan Ki Phir Wo Jhadi Hai.mp3",
        "./music/sad/music_sad_Meri bheegi bheegi si ( Anamika) Kishor Kumar Full hd video Song 2021 kishorkumar.mp3",
        "./music/sad/music_sad_yara sili sili.mp3",
        "./music/sad/music_sad_Yeh Jo Mohabbat Hai 4K Video Song _ Kati Patang Song.mp3",
            
            
            
               
            ]
    },
    {
        name: "happy",
        path: "videos/happy.mp4",
        music: [ "./music/happy/music_happy_Aanewala Pal Janewala Hai _ Golmaal _ Hindi Film Song _ Kishore Kumar (1).mp3",
                 "./music/happy/music_happy_Arey Deewano Mujhe Pehchano Kishore Kumar Amitabh Bachchan Don 1978  Remastered Audio 1080P.mp3",
                 "./music/happy/music_happy_Apni To Jaise Taise Jhankar HD ,Laawaris 1981, frm Saadat DVRCpWofaBA.mp3",
                 "./music/happy/music_happy_Chala Jata Hoon _ Sanam.mp3",
                 "./music/happy/music_happy_Didi Tera Devar Deewana - Hum Aapke Hain Koun - Lata Mangeshkar & S. P. Balasubramaniam's Hit Song.mp3",
                 "./music/happy/music_happy_Disco Dancer - I Am A Disco Dancer Zindagi Mera Gaana - Vijay Benedict.mp3",
            
            
            
               
                ]
    },
    {
        name: "sufi",
        path: "videos/sufi.mp4",
        music: ["./music/sufi/music_sufi_Mann Ki Lagan.mp3",
                "./music/sufi/music_sufi_Afreen Afreen _ Sangam (1996) _ Hindi Video Song _ Nusrat Fateh Ali Khan.mp3",
                "./music/sufi/music_sufi_Akhiyan (Full Audio Song) _ Rahat Fateh Ali Khan _ Punjabi Song Collection _ Speed Records.mp3",
                "./music/sufi/music_sufi_Charkha - Rahat Fateh Ali Khan.mp3",
                "./music/sufi/music_sufi_Ishq Anokha -  Kailash Kher _ ft. Nawazuddin Siddiqui & Sobhita Dhulipala.mp3",
                "./music/sufi/music_sufi_O Jogi Music Video ft Mantra _ Kailash Kher _ Kailasa Ishq Anokha.mp",
                "./music/sufi/music_sufi_Sanu Ek Pal Chain Video _ Raid _ Ajay Devgn _ Ileana D'Cruz_ Tanishk B Rahat Fateh Ali Khan Manoj M.mp3",
                "./music/sufi/music_sufi_Tere Ishq Nachaya - Official Music Video _ Samarjeet Randhava.mp3",
            
                
                ]
    },
    {
        name: "ghazal",
        path: "videos/ghazal.mp4",
        music: ["./music/ghazal/music_ghazal_Gham Ka Khazana Tera Bhi Hai Mera Bhi Hai Lata Mangeshkar and Jagjit Singh.mp3",
                "./music/ghazal/music_ghazal_Koi Yeh Kaise Bataye _ Ghazal Song _ Jagjit Singh.mp3",
                "./music/ghazal/music_ghazal_Pyar Mujh Se Jo Kiya Tumne - Deepti Naval - Farooque Sheikh - Saath Saath - Jagjit Singh - Ghazals.mp3",
                "./music/ghazal/music_ghazal_Tum Itna Jo Muskura Rahe Ho _ Ghazal Song _ Arth _ Jagjit Singh.mp3",
                "./music/ghazal/music_ghazal_Tum Ko Dekha Toh Ye Khayal - Jagjit Singh Ghazals (HD)- Deepti Naval - Farooq sheikh - Saath Saath.mp3",
                "./music/ghazal/music_ghazal_Yeh Tera Ghar Yeh Mera - Deepti Naval - Farooque Sheikh - Saath Saath - Jagjit Singh - Chitra Singh.mp3",  
                "./music/ghazal/music_ghazal_Chithi Na Koi Sandesh.mp3", 
        

            
               
                ]
    }
 ];

function load_track(index_no, music_index) {
    track.src = all_videos[index_no].music[music_index];
}

function load_theme(index_no, music_index) {
    global_index_no = index_no;
    global_music_index = music_index;
    pause_gif.style.display = 'none';
    pause_text.style.display = 'none';
    playing_song = false;
    load_track(index_no, music_index);
    track_video.src = all_videos[index_no].path;
    theme_title.innerHTML = all_videos[index_no].name;
    justplay();
 }

load_theme(global_index_no, global_music_index);

 //mute sound function
function mute_sound(){
	track.volume = 0;
	recent_volume.value = 0;
    volume_icon.innerHTML = '<i class="fa fa-volume-xmark" aria-hidden="true"></i>';
}

function unmute_sound() {
    track.volume = 1;
    recent_volume.value = 100;
   
    volume_icon.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>'
}

function toggle_mute() {
    if (isMuted) {
        unmute_sound();
    } else {
        mute_sound();
    }
    isMuted = !isMuted;
}

// checking.. the song is playing or not
function justplay(){
    if(playing_song==false){
        playsong();

    }else{
        pausesong();
    }
}

// play song
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    pause_gif.style.display = 'none';
    pause_text.style.display = 'none';
  }
  
  //pause song
  function pausesong(){
      track.pause();
      playing_song = false;
      play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
      pause_gif.style.display = 'initial';
      pause_text.style.display = 'initial';
  }

// reset song slider
function reset_slider(){
    slider.value = 0;
}

// change volume
function volume_change(){
	track.volume = recent_volume.value / 100;
}

// next song
function next_song(){
    if(global_music_index < all_videos[global_index_no].music.length - 1){
		global_music_index += 1;
		load_track(global_index_no, global_music_index);
		playsong();
	}else{
		global_music_index = 0;
		load_track(global_index_no, global_music_index);
		playsong();
	}
}

// previous song
function previous_song(){
	if(global_music_index > 0){
		global_music_index-= 1;
		load_track(global_index_no, global_music_index);
		playsong();

	}else{
		global_music_index = all_videos[global_index_no].music.length - 1;
		load_track(global_index_no, global_music_index);
		playsong();
	}
}

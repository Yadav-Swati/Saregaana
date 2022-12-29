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
        music: ["/Users/swatiyadav/Desktop/HTML/new/music /romance/music/romance/Barsaat - Bheegi Bheegi Raaton Mein_Adnan Sami_Kabhi To Nazar Milao.mp3",
               "/Users/swatiyadav/Desktop/HTML/new/music /romance/music/romance/Chura Liya Hai Tumne Jo Dil Ko (Eng Sub) [Full Video Song] (HD) With Lyrics - Yaadon Ki Baaraat.mp3",
               "/Users/swatiyadav/Desktop/HTML/new/music /romance/music/romance/Ek Ladki ko dekha - Full Video HD _ 1942 A love story _ Anil Kapoor _ Manisha Koirala (1).mp3",
               "/Users/swatiyadav/Desktop/HTML/new/music /romance/music/romance/Humein Tumse Pyar Kitna _ Sanam.mp3",
               "/Users/swatiyadav/Desktop/HTML/new/music /romance/music/romance/Kora Kagaz Tha Yeh Man Mera 4K Video Song _ Lata Mangeshkar_ Kishore Kumar _ Aradhana_ Rajesh Khanna.mp3",
               "/Users/swatiyadav/Desktop/HTML/new/music /romance/music/romance/Likhe Jo Khat Tujhe Woh Teri Yaad Mein  [HD] 1080P.mp3",

        
            // // "music/romance/Lag Jaa Gale - Sadhana, Lata Mangeshkar, Woh Kaun Thi Romantic Song.mp3", 
            //     // "music/romance/Tujhe Dekha Toh Song _ Dilwale Dulhania Le Jayenge _ Shah Rukh Khan, Kajol _ Lata, Kumar Sanu _ DDLJ.mp3",
            //     "music/romance/Humein Tumse Pyar Kitna _ Sanam.mp3",
            //     "music/romance/Chura Liya Hai Tumne Jo Dil Ko (Eng Sub) [Full Video Song] (HD) With Lyrics - Yaadon Ki Baaraat.mp3",
            //     // "music/romance/Tum Aa Gaye Ho Noor Aa Gaya Hai _ Lata Mangeshkar, Kishore Kumar _ Aandhi 1975 Songs _ Sanjeev Kumar.mp3",
            //     "music/romance/Ek Ladki ko dekha - Full Video HD _ 1942 A love story _ Anil Kapoor _ Manisha Koirala.mp3",
            //     "music/romance/Barsaat - Bheegi Bheegi Raaton Mein_Adnan Sami_Kabhi To Nazar Milao.mp3",
            //     "music/romance/Kora Kagaz Tha Yeh Man Mera 4K Video Song _ Lata Mangeshkar_ Kishore Kumar _ Aradhana_ Rajesh Khanna.mp3",
            //     // "music/romance/Aap Ki Ankhon Mein Kuch - Kishore Kumar, Lata Mangeshkar, Ghar Romantic Song.mp3",
            //     "music/romance/Likhe Jo Khat Tujhe Woh Teri Yaad Mein  [HD] 1080P.mp3"
            ]
    },
    {
        name: "sad",
        path: "videos/sad.mp4",
        music: ["/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/aaja piya tohe pyar du_Baharon Ke Sapne1967_AshaParekh& Rajesh Khanna_Lata_Majrooh_R D Burman _a tri.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/Guide 1965 Din dhal jaye hai raat na.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/Jis Gali Mein Tera Ghar 4K Song _ Mukesh _ Rajesh Khanna _ Kati Patang _Classic Bollywood Video Song.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/Kya Hua Tera Wada in HD.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/Lata Mangeshkar - Kahin Door Jab Din Dhal Jaye (Official Audio).mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/Lagi Aaj Sawan Ki Phir Wo Jhadi Hai.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/Meri bheegi bheegi si ( Anamika) Kishor Kumar Full hd video Song 2021 kishorkumar.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/yara sili sili.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sad/music/sad/Yeh Jo Mohabbat Hai 4K Video Song _ Kati Patang Song.mp3",


            // "music/sad/Lagi Aaj Sawan Ki Phir Wo Jhadi Hai.mp3",
            //     // "music/sad/Tere Bina Zindagi Se - Aandhi [1975] (Original)  - Lata Mangeshkar - Kishore Kumar.mp3", 
            //     "music/sad/Kya Hua Tera Wada in HD.mp3",
            //     "music/sad/Meri bheegi bheegi si ( Anamika) Kishor Kumar Full hd video Song 2021 kishorkumar.mp3",
            //     "music/sad/Lata Mangeshkar - Kahin Door Jab Din Dhal Jaye (Official Audio).mp3",
            //     "music/sad/Yeh Jo Mohabbat Hai 4K Video Song _ Kati Patang Song.mp3",
            //     "music/sad/yara sili sili.mp3",
            //     "music/sad/aaja piya tohe pyar du_Baharon Ke Sapne1967_AshaParekh& Rajesh Khanna_Lata_Majrooh_R D Burman _a tri.mp3",
            //     // "music/sad/Tujhse Naraaz Nahin Zindagi (Male) _ Masoom _ Naseeruddin Shah _ Jugal Hansraj _TujhseNaraazNahin.mp3",
            //     "music/sad/Guide 1965 Din dhal jaye hai raat na.mp3",
            //     "music/sad/Jis Gali Mein Tera Ghar 4K Song _ Mukesh _ Rajesh Khanna _ Kati Patang _Classic Bollywood Video Song.mp3",
            ]
    },
    {
        name: "happy",
        path: "videos/happy.mp4",
        music: ["/Users/swatiyadav/Desktop/HTML/new/music /happy/music/happy/Aanewala Pal Janewala Hai _ Golmaal _ Hindi Film Song _ Kishore Kumar (1).mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /happy/music/happy/Apni To Jaise Taise Jhankar HD ,Laawaris 1981, frm Saadat DVRCpWofaBA.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /happy/music/happy/Arey Deewano Mujhe Pehchano Kishore Kumar Amitabh Bachchan Don 1978  Remastered Audio 1080P.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /happy/music/happy/Chala Jata Hoon _ Sanam.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /happy/music/happy/Didi Tera Devar Deewana - Hum Aapke Hain Koun - Lata Mangeshkar & S. P. Balasubramaniam's Hit Song.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /happy/music/happy/Disco Dancer - I Am A Disco Dancer Zindagi Mera Gaana - Vijay Benedict.mp3",


            // "music/happy/Arey Deewano Mujhe Pehchano Kishore Kumar Amitabh Bachchan Don 1978  Remastered Audio 1080P.mp3",
            //     "music/happy/Aanewala Pal Janewala Hai _ Golmaal _ Hindi Film Song _ Kishore Kumar.mp3",
            //     // "music/happy/Maine Tere Liye Hi Saat Rang Ke Sapne - Mukesh - Rajesh Khanna, Ramesh Deo, Seema Deo - Anand 1971.mp3",
            //     "music/happy/Apni To Jaise Taise Jhankar HD ,Laawaris 1981, frm Saadat DVRCpWofaBA.mp3",
            //     // "music/happy/O Haseena Zulfon Waali HD 1080p RIZ.mp3",
            //     // "music/happy/Ajeeb Dastan - HD - Raaj Kumar, Meena Kumari, Nadira.mp3",
            //     "music/happy/Chala Jata Hoon _ Sanam.mp3",
            //     // "music/happy/Namak Halaal  - Ke Pag Ghunghroo Bandh Meera - Kishore Kumar - Chorus.mp3",
            //     "music/happy/Disco Dancer - I Am A Disco Dancer Zindagi Mera Gaana - Vijay Benedict.mp3",
            //     "music/happy/Didi Tera Devar Deewana - Hum Aapke Hain Koun - Lata Mangeshkar & S. P. Balasubramaniam's Hit Song.mp3"
                ]
    },
    {
        name: "sufi",
        path: "videos/sufi.mp4",
        music: ["/Users/swatiyadav/Desktop/HTML/new/music /sufi/music/sufi/Afreen Afreen _ Sangam (1996) _ Hindi Video Song _ Nusrat Fateh Ali Khan.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sufi/music/sufi/Akhiyan (Full Audio Song) _ Rahat Fateh Ali Khan _ Punjabi Song Collection _ Speed Records.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sufi/music/sufi/Charkha - Rahat Fateh Ali Khan.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sufi/music/sufi/Ishq Anokha -  Kailash Kher _ ft. Nawazuddin Siddiqui & Sobhita Dhulipala.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sufi/music/sufi/Mann Ki Lagan.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sufi/music/sufi/O Jogi Music Video ft Mantra _ Kailash Kher _ Kailasa Ishq Anokha.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sufi/music/sufi/Sanu Ek Pal Chain Video _ Raid _ Ajay Devgn _ Ileana D'Cruz_ Tanishk B Rahat Fateh Ali Khan Manoj M.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /sufi/music/sufi/Tere Ishq Nachaya - Official Music Video _ Samarjeet Randhava.mp3",


            // "music/sufi/Mann Ki Lagan.mp3",
            //     // "music/sufi/Maula Mere Maula(ANWAR) HD [VERY HIGH QUALITY VIDE.mp3",
            //     "music/sufi/Afreen Afreen _ Sangam (1996) _ Hindi Video Song _ Nusrat Fateh Ali Khan.mp3",
            //     "music/sufi/Sanu Ek Pal Chain Video _ Raid _ Ajay Devgn _ Ileana D'Cruz_ Tanishk B Rahat Fateh Ali Khan Manoj M.mp3",
            //     "music/sufi/Ishq Anokha -  Kailash Kher _ ft. Nawazuddin Siddiqui & Sobhita Dhulipala.mp3",
            //     "music/sufi/Tere Ishq Nachaya - Official Music Video _ Samarjeet Randhava.mp3",
            //     "music/sufi/Charkha - Rahat Fateh Ali Khan.mp3",
            //     // "music/sufi/Meharbani Teri _ Best of  Kailash Kher Album _ Ishq Anokha.mp3",
            //     "music/sufi/Akhiyan (Full Audio Song) _ Rahat Fateh Ali Khan _ Punjabi Song Collection _ Speed Records.mp3",
            //     "music/sufi/O Jogi Music Video ft Mantra _ Kailash Kher _ Kailasa Ishq Anokha.mp3"
                ]
    },
    {
        name: "ghazal",
        path: "videos/ghazal.mp4",
        music: ["/Users/swatiyadav/Desktop/HTML/new/music /ghazal/music/ghazal/Chithi Na Koi Sandesh.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /ghazal/music/ghazal/Gham Ka Khazana Tera Bhi Hai Mera Bhi Hai Lata Mangeshkar and Jagjit Singh.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /ghazal/music/ghazal/Koi Yeh Kaise Bataye _ Ghazal Song _ Jagjit Singh.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /ghazal/music/ghazal/Pyar Mujh Se Jo Kiya Tumne - Deepti Naval - Farooque Sheikh - Saath Saath - Jagjit Singh - Ghazals.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /ghazal/music/ghazal/Tum Itna Jo Muskura Rahe Ho _ Ghazal Song _ Arth _ Jagjit Singh.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /ghazal/music/ghazal/Tum Ko Dekha Toh Ye Khayal - Jagjit Singh Ghazals (HD)- Deepti Naval - Farooq sheikh - Saath Saath.mp3",
                "/Users/swatiyadav/Desktop/HTML/new/music /ghazal/music/ghazal/Yeh Tera Ghar Yeh Mera - Deepti Naval - Farooque Sheikh - Saath Saath - Jagjit Singh - Chitra Singh.mp3",

                
            // "music/ghazal/Tum Itna Jo Muskura Rahe Ho _ Ghazal Song _ Arth _ Jagjit Singh.mp3",
            //     // "music/ghazal/Jhuki Jhuki Si Nazar _ Jagjit Singh _ Arth 1983 Songs _ Ghazal Song _ Shabana Azmi,  Raj Kiran.mp3",
            //     "music/ghazal/Tum Ko Dekha Toh Ye Khayal - Jagjit Singh Ghazals (HD)- Deepti Naval - Farooq sheikh - Saath Saath.mp3",
            //     "music/ghazal/Chithi Na Koi Sandesh.mp3",
            //     "music/ghazal/Koi Yeh Kaise Bataye _ Ghazal Song _ Jagjit Singh.mp3",
            //     "music/ghazal/Yeh Tera Ghar Yeh Mera - Deepti Naval - Farooque Sheikh - Saath Saath - Jagjit Singh - Chitra Singh.mp3",
            //     // "music/ghazal/Woh Kagaz Ki Kashti _ Ghazal Song _ Jagjit Singh _ Sudarshan Faakir _ Aaj.mp3",
            //     "music/ghazal/Pyar Mujh Se Jo Kiya Tumne - Deepti Naval - Farooque Sheikh - Saath Saath - Jagjit Singh - Ghazals.mp3",
            //     "music/ghazal/Gham Ka Khazana Tera Bhi Hai Mera Bhi Hai Lata Mangeshkar and Jagjit Singh.mp3",
            //     // "music/ghazal/Seene Mein Jalan, Aankhon Mein Toofan Sa Kyun Hai.mp3",
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
    playing_song = true;
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

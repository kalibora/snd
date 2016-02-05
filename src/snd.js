/*!
 * snd v0.9.1
 * https://github.com/chrsbrg/snd
 *
 * Copyright 2016 Christian Schellenberg
 * Released under the MIT license
 */
(function($) {
    if(!$) return console.log('snd.js requires jQuery');

    // The plugin
    var Snd = function(t, a, s, o) {

        // Audio
        var audio = {
            playing  :  false,
            looped   :  false,
            muted    :  false,
            toggled  :  false,
            init     : (function() { 
                         ($.isArray(s)) ? a.src = s[0] : a.src = s;
                         if(typeof o !== 'undefined') {
                            if(o['autoplay'] == true) a.play(); }})(),
            duration :  function() {  
                         t.find('.time').attr('max', a.duration);
                         t.find('.duration').html(audio.calc(a.duration));
                         t.find('.currenttime').html('00:00'); },
            time     :  function() {  
                         t.find('.time').val(a.currentTime); 
                         t.find('.currenttime').html(audio.calc(a.currentTime));
                         if($.isArray(s) && t.find('.time').val() == Math.floor(t.find('.time').attr('max')) && s.length - 1 != playlist.current) playlist.next(); 
                         if($.isArray(s) && t.find('.time').val() == Math.floor(t.find('.time').attr('max')) && s.length - 1 == playlist.current) {
                             audio.playing = false;
                             audio.toggle(); }},
            settime  :  function() {  a.currentTime = $(this).val(); },
            play     :  function() {
                         audio.playing = true;
                         a.play(); },
            pause    :  function() {  
                         audio.playing = false;
                         a.pause(); },
            loop     :  function() { (audio.looped == false) ? a.loop  = audio.looped = true : a.loop  = audio.looped = false; },
            mute     :  function() { (audio.muted  == false) ? a.muted = audio.muted  = true : a.muted = audio.muted  = false; },
            toggle   :  function() { 
                         if(audio.toggled == false) {
                            t.find('.toggle-play').hide();
                            t.find('.toggle-pause').show();
                            audio.toggled = true;
                            audio.play();
                         } else {
                            t.find('.toggle-play').show();
                            t.find('.toggle-pause').hide();
                            audio.toggled = false;
                            audio.pause(); }},
            calc     :  function(y) { 
                         var z = Math.floor(y / 60);
                         z = (z >= 10) ? z : '0' + z;
                         y = Math.floor(y % 60);
                         y = (y >= 10) ? y : '0' + y;
                         return z + ':' + y; }};
        
        // Playlist
        var playlist = {
            current : 0,
            init    : (function() { if($.isArray(s)) t.find('.playlist_item').first().addClass('playing'); })(),
            update  :  function() {
                        a.src = s[playlist.current];
                        a.load();
                        audio.play(); },
            change  :  function() {
                        if(t.find('.toggle').length > 0) {
                            audio.toggled = false;
                            audio.toggle(); }
                        t.find('.playing').removeClass('playing');
                        $(this).addClass('playing');
                        playlist.current = $(this).index();
                        playlist.update(); },
            prev    :  function() { 
                        if(t.find('.playing').prev().length > 0) t.find('.playing').removeClass('playing').prev().addClass('playing');
                        if(t.find('.toggle').length > 0) {
                            audio.toggled = false;
                            audio.toggle(); }
                        if(playlist.current != 0) { 
                            playlist.current--;
                            playlist.update(); }},
            next    :  function() {
                        if(t.find('.playing').next().length > 0) t.find('.playing').removeClass('playing').next().addClass('playing');
                        if(t.find('.toggle').length > 0) {
                            audio.toggled = false;
                            audio.toggle(); }
                        if(playlist.current != s.length - 1) { 
                            playlist.current++;
                            playlist.update(); }},
            shuffle :  function() {
                        audio.pause();
                        for(var i = s.length - 1; i > 0; i--) {
                            var j = Math.floor(Math.random() * (i + 1));
                            var t = s[i];
                            s[i] = s[j];
                            s[j] = t; }
                        playlist.current = 0;
                        playlist.update(); }};

        // Event listener
        var listener = (function() {
            a.addEventListener('loadedmetadata', audio.duration);
            a.addEventListener('timeupdate', audio.time, false);
            t.find('.time').on('change', audio.settime);
            t.find('.play').on('click', audio.play);
            t.find('.pause').on('click', audio.pause);
            t.find('.loop').on('click', audio.loop);
            t.find('.mute').on('click', audio.mute);
            
            if(t.find('.toggle').length > 0) { 
                t.find('.toggle-pause').hide();
                t.find('.toggle-play').on('click', audio.toggle);
                t.find('.toggle-pause').on('click', audio.toggle); }
                
            if($.isArray(s)) {
                t.find('.prev').on('click', playlist.prev);
                t.find('.next').on('click', playlist.next);
                t.find('.playlist_item').on('click', playlist.change); }})();
                t.find('.shuffle').on('click', playlist.shuffle);
    };
    
    // Multiple instances
    $.fn.snd = function(s, o) {  
        return this.each(function() {
            var t = $(this);
            var a = new Audio();
            var i = new Snd(t, a, s, o);
        });
    };
})(window.jQuery)
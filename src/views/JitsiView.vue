<template>
  <div class="container-fluid">
  	<div class="row">
  		<div class="col-md-12" style="height: calc(100vh - 10px);">
  			 <vue-jitsi-meet
              ref="jitsiRef"
              domain="media.sintonus.com"
              :options="jitsiOptions"
            ></vue-jitsi-meet>
  		</div>
  		
  	</div>
  
  </div>
</template>
<script>
// @ is an alias to /src
import { JitsiMeet } from '@mycure/vue-jitsi-meet';
export default {

  name: 'JitsiView',
  components: {
  	VueJitsiMeet: JitsiMeet
  },
  data() {
  return {

    }
  },
  computed: {
          jitsiOptions () {
            return {
              roomName: '12sss',
              noSSL: false,
              userInfo: {
                email: 'abc@gmail.com',
                displayName: 'Chatto meet',
              },
              configOverwrite: {
                enableNoisyMicDetection: false,
                disableSimulcast: true,
                prejoinPageEnabled: false,
                disableDeepLinking: true,
              },
              interfaceConfigOverwrite: {
                 TOOLBAR_BUTTONS: [
                  'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
                  'fodeviceselection', 'hangup', 'profile', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
                  'videoquality', 'filmstrip', 'feedback', 'stats',
                  'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
              ],

              AUDIO_LEVEL_PRIMARY_COLOR: 'rgba(255,255,255,0.4)',
              AUDIO_LEVEL_SECONDARY_COLOR: 'rgba(255,255,255,0.2)',
              AUTO_PIN_LATEST_SCREEN_SHARE: 'remote-only',
              BRAND_WATERMARK_LINK: ' ',
              CLOSE_PAGE_GUEST_HINT: false, // A html text to be shown to guests on the close page, false disables 

              CONNECTION_INDICATOR_AUTO_HIDE_ENABLED: true,
              CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT: 5000,
              CONNECTION_INDICATOR_DISABLED: false,
              DEFAULT_BACKGROUND: '#474747',
              DEFAULT_LOCAL_DISPLAY_NAME: 'me',
              DEFAULT_LOGO_URL: 'https://stun.peekvideochat.com/images/watermark.png',
              DEFAULT_REMOTE_DISPLAY_NAME: 'Loading',
              DISABLE_DOMINANT_SPEAKER_INDICATOR: false,
              DISABLE_FOCUS_INDICATOR: false,
              DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
              DISABLE_PRESENCE_STATUS: false,
              DISABLE_RINGING: false,
              DISABLE_TRANSCRIPTION_SUBTITLES: false,
              DISABLE_VIDEO_BACKGROUND: false,
              DISPLAY_WELCOME_PAGE_CONTENT: false,
              DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
              ENABLE_DIAL_OUT: true,
              ENABLE_FEEDBACK_ANIMATION: false, // Enables feedback star animation.
              FILM_STRIP_MAX_HEIGHT: 120,
              filmStripOnly: false,
              GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
              HIDE_INVITE_MORE_HEADER: true,
              INITIAL_TOOLBAR_TIMEOUT: 20000,
              JITSI_WATERMARK_LINK: 'http://peekinternational.com/',
              LANG_DETECTION: true, // Allow i18n to detect the system language
              LIVE_STREAMING_HELP_LINK: 'http://peekinternational.com/', // Documentation reference for the live streaming feature.
              LOCAL_THUMBNAIL_RATIO: 16 / 9, // 16:9

              MAXIMUM_ZOOMING_COEFFICIENT: 1.3,

              MOBILE_APP_PROMO: false,
              // NATIVE_APP_NAME: 'Als Web Cam',
              OPTIMAL_BROWSERS: [ 'chrome', 'chromium', 'firefox', 'nwjs', 'electron', 'safari' ],
              POLICY_LOGO: null,
              // PROVIDER_NAME: 'Als Web Cam',
              RECENT_LIST_ENABLED: false,
              REMOTE_THUMBNAIL_RATIO: 1, // 1:1
              SETTINGS_SECTIONS: [ 'devices', 'language', 'moderator', 'profile', 'calendar' ],
              SHOW_BRAND_WATERMARK: false,
              SHOW_CHROME_EXTENSION_BANNER: false,
              SHOW_DEEP_LINKING_IMAGE: false,
              SHOW_JITSI_WATERMARK: false,
              SHOW_POWERED_BY: false,
              SHOW_PROMOTIONAL_CLOSE_PAGE: false,
              SHOW_WATERMARK_FOR_GUESTS: true, // if watermark is disabled by default, it can be shown only for guests
              SUPPORT_URL: 'http://peekinternational.com/',
              TOOLBAR_ALWAYS_VISIBLE: true,
              disableDeepLinking: true,
              TOOLBAR_TIMEOUT: 60000,
              UNSUPPORTED_BROWSERS: [],
              VERTICAL_FILMSTRIP: true,
              VIDEO_LAYOUT_FIT: 'both',
              VIDEO_QUALITY_LABEL_DISABLED: false,
              makeJsonParserHappy: 'even if last key had a trailing comma'

                 },
              onload: this.onIFrameLoad
            };
          },
            
        },

        method: {
        	 onIFrameLoad () {
               this.$refs.jitsiRef.addEventListener('participantJoined', this.onParticipantJoined);
               this.$refs.jitsiRef.addEventListener('videoConferenceLeft', this.onStopCall);
            },

            onParticipantJoined (e) {
                // alert('join');
              },
            onStopCall(){
            	alert('hello');
            }  
        }

};
</script>
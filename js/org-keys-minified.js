var OrgKeyReader={EMPTY_START:/^(\s*)(.*)/,EMPTY_END:/\s$/,CONSOLE:null,CONSOLE_INPUT:null,CONSOLE_LABEL:null,CONSOLE_OFFSET:"50px",REGISTER:{},init:function(){this.CONSOLE=document.createElement("div");this.CONSOLE.innerHTML='<form action="" style="margin:0px;padding:0px;" onsubmit="org_html_manager.evalReadCommand(); return false;"><table id="org-info-js_console" style="width:100%;margin:0px 0px 0px 0px;border-style:none;" cellpadding="0" cellspacing="0" summary="minibuffer"><tbody><tr><td id="org-info-js_console-icon" style="padding:0px 0px 0px 0px;border-style:none;">&#160;</td><td style="width:100%;vertical-align:middle;padding:0px 0px 0px 0px;border-style:none;"><table style="width:100%;margin:0px 0px 0px 0px;border-style:none;" cellpadding="0" cellspacing="2"><tbody><tr><td id="org-info-js_console-label" style="white-space:nowrap;padding:0px 0px 0px 0px;border-style:none;"></td></tr><tr><td style="width:100%;vertical-align:middle;padding:0px 0px 0px 0px;border-style:none;"><input type="text" id="org-info-js_console-input" onkeydown="org_html_manager.getKey();" onclick="this.select();" maxlength="150" style="width:100%;padding:0px;margin:0px 0px 0px 0px;border-style:none;" value=""/></td></tr></tbody></table></td><td style="padding:0px 0px 0px 0px;border-style:none;">&#160;</td></tr></tbody></table></form>';this.CONSOLE.style.position="relative";this.CONSOLE.style.marginTop="-"+this.CONSOLE_OFFSET;this.CONSOLE.style.top="-"+this.CONSOLE_OFFSET;this.CONSOLE.style.left="0px";this.CONSOLE.style.width="100%";this.CONSOLE.style.height="40px";this.CONSOLE.style.overflow="hidden";this.CONSOLE.style.verticalAlign="middle";this.CONSOLE.style.zIndex="9";this.CONSOLE.style.border="1px solid #cccccc";this.CONSOLE.id="org-info-js_console-container";document.body.insertBefore(this.CONSOLE,document.body.firstChild);this.MESSAGING=false;this.CONSOLE_LABEL=document.getElementById("org-info-js_console-label");this.CONSOLE_INPUT=document.getElementById("org-info-js_console-input");document.onkeypress=OrgKeyReaderKeyEvent;var b=document.getElementsByTagName("a");for(var c=0;c<b.length;++c){var a=b[c].getAttribute("accesskey");var d=b[c].getAttribute("href");if(a&&d){this.registerHref(a,d)}}},getKey:function(){var a=this.CONSOLE_INPUT.value;this.CONSOLE_INPUT.value="";if(a.match(this.EMPTY_START)){a=a.match(this.EMPTY_START)[2]}if(a.length&&a.match(this.EMPTY_END)){a=a.substr(0,a.length-1)}if(0==a.length){return}this.CONSOLE_INPUT.blur();if(this.REGISTER[a]&&"function"==typeof this.REGISTER[a]){this.REGISTER[a]()}},register:function(a,b){this.REGISTER[a]=b},registerHref:function(b,a){this.register(b,function(){document.location.href=a})}};function OrgKeyReaderKeyEvent(b){var d;if(!b){b=window.event}if(b.which){d=b.which}else{if(b.keyCode){d=b.keyCode}}if(b.ctrlKey){return}var a=String.fromCharCode(d);if(b.shiftKey){OrgKeyReader.CONSOLE_INPUT.value=OrgKeyReader.CONSOLE_INPUT.value+a}else{OrgKeyReader.CONSOLE_INPUT.value=OrgKeyReader.CONSOLE_INPUT.value+a.toLowerCase()}OrgKeyReader.getKey()};
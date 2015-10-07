$(document).ready(function() {
    
$('#snippet_show').each(function() {
         var editor = CodeMirror.fromTextArea(this, {
             lineNumbers : true,
             matchBrackets : true,
             readOnly: true,
             mode: $('#snippet_mode').data('mode')
         });
     })

CodeMirror.modeURL = "../mode/%N/%N.js";

var editor = CodeMirror.fromTextArea(document.getElementById("snippet_body"), {
	    lineNumbers : true,
	    matchBrackets : true,
	    mode: $('#snippet_edit').data('edit-mode')
	});
	var value = $('#snippet_edit').data('edit-mode');
	if (value == "text/x-csharp")
    $('#mode option')[1].setAttribute("selected","selected");
	else if (value == 'text/x-csrc')
	$('#mode option')[2].setAttribute("selected","selected");
else if (value == 'text/x-c++src')
	$('#mode option')[3].setAttribute("selected","selected");
else if (value == 'text/x-java')
	$('#mode option')[4].setAttribute("selected","selected");
else if (value == 'application/x-erb')
	$('#mode option')[5].setAttribute("selected","selected");
else if (value == 'htmlmixed')
	$('#mode option')[6].setAttribute("selected","selected");
else if (value == 'javascript')
	$('#mode option')[7].setAttribute("selected","selected");
else if (value == 'php')
	$('#mode option')[8].setAttribute("selected","selected");
else if (value == 'python')
	$('#mode option')[9].setAttribute("selected","selected");
else if (value == 'ruby')
	$('#mode option')[10].setAttribute("selected","selected");
else if (value == 'xml')
	$('#mode option')[11].setAttribute("selected","selected");


// 	CodeMirror.on(modeInput, "keypress", function(e) {
//  		 if (e.keyCode == 13) change();
// 	});

var modeInput = document.getElementById("mode");

$('#mode').on('change',function(){
        change(this,'snippet_edit');     
    });

function change() {
  		var val = modeInput.value, m, mode, spec;
  		if (m = /.+\.([^.]+)$/.exec(val)) {
  		  var info = CodeMirror.findModeByExtension(m[1]);
  		  if (info) {
		      mode = info.mode;
		      spec = info.mime;
		   }
 		} else if (/\//.test(val)) {
	    var info = CodeMirror.findModeByMIME(val);
	    if (info) {
	      mode = info.mode;
	      spec = val;
	    }
	  } else {
   		 mode = spec = val;
  		}

	  if (mode) {
	    editor.setOption("mode", spec);
	    CodeMirror.autoLoadMode(editor, mode);
	    document.getElementById("modeinfo").textContent = spec;
	  } else {
	    alert("Could not find a mode corresponding to " + val);
	  }
	}	

})

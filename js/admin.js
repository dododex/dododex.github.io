
var ctrlOn = true;
var cat1 = null; // Top level cat
var category = null;
var noDataHTML = '<div class="light center marginTop2 marginBottom2"><b class="white">No results found.</b> Please <a href="https://github.com/dododex/dododex">add it</a>.</div>'

var cats = {
   "1":{
      "n":"Dinos",
      "p":null,
      "l":1
   },
   "2":{
      "n":"Items",
      "p":null,
      "l":1
   },
   "3":{
      "n":"Commands",
      "p":null,
      "l":1
   },
   "4":{
      "n":"Dinos",
      "p":1,
      "l":2
   },
   "53":{
      "n":"Aberration",
      "p":1,
      "l":2
   },
   "54":{
      "n":"Extinction",
      "p":1,
      "l":2
   },
   "55":{
      "n":"Tek Creatures",
      "p":1,
      "l":2
   },
   "56":{
      "n":"Genesis",
      "p":1,
      "l":2
   },
   "52":{
      "n":"Alphas",
      "p":1,
      "l":2
   },
   "5":{
      "n":"Bosses",
      "p":1,
      "l":2
   },
   "6":{
      "n":"Event Creatures",
      "p":1,
      "l":2
   },
   "8":{
      "n":"Resources",
      "p":2,
      "l":2
   },
   "9":{
      "n":"Weapons & Gear",
      "p":2,
      "l":2
   },
   "10":{
      "n":"Structures",
      "p":2,
      "l":2
   },
   "11":{
      "n":"Special",
      "p":2,
      "l":2
   },
   "12":{
      "n":"Resources",
      "p":8,
      "l":3
   },
   "13":{
      "n":"Seeds",
      "p":8,
      "l":3
   },
   "14":{
      "n":"Consumables",
      "p":8,
      "l":3
   },
   "45":{
      "n":"Kibble",
      "p":8,
      "l":3
   },
   "15":{
      "n":"Eggs",
      "p":8,
      "l":3
   },
   "16":{
      "n":"Tools",
      "p":9,
      "l":3
   },
   "17":{
      "n":"Armor",
      "p":9,
      "l":3
   },
   "18":{
      "n":"Saddles",
      "p":9,
      "l":3
   },
   "19":{
      "n":"Weapons",
      "p":9,
      "l":3
   },
   "20":{
      "n":"Attachments",
      "p":9,
      "l":3
   },
   "21":{
      "n":"Ammunition",
      "p":9,
      "l":3
   },
   "22":{
      "n":"Structures",
      "p":10,
      "l":3
   },
   "23":{
      "n":"Thatch",
      "p":10,
      "l":3
   },
   "24":{
      "n":"Wood",
      "p":10,
      "l":3
   },
   "25":{
      "n":"Adobe",
      "p":10,
      "l":3
   },
   "46":{
      "n":"Stone",
      "p":10,
      "l":3
   },
   "26":{
      "n":"Metal",
      "p":10,
      "l":3
   },
   "27":{
      "n":"Tek",
      "p":10,
      "l":3
   },
   "28":{
      "n":"Dyes",
      "p":11,
      "l":3
   },
   "29":{
      "n":"Recipes",
      "p":11,
      "l":3
   },
   "30":{
      "n":"Skins",
      "p":11,
      "l":3
   },
   "31":{
      "n":"Artifacts",
      "p":11,
      "l":3
   },
   "32":{
      "n":"Trophies",
      "p":11,
      "l":3
   },
   "33":{
      "n":"Tribe & Player Administration",
      "p":3,
      "l":2
   },
   "34":{
      "n":"Dinos",
      "p":3,
      "l":2
   },
   "35":{
      "n":"Items",
      "p":3,
      "l":2
   },
   "36":{
      "n":"Structures",
      "p":3,
      "l":2
   },
   "37":{
      "n":"Server",
      "p":3,
      "l":2
   },
   "38":{
      "n":"Cheats",
      "p":3,
      "l":2
   },
   "39":{
      "n":"Chat & Messaging",
      "p":3,
      "l":2
   },
   "40":{
      "n":"Movement",
      "p":3,
      "l":2
   },
   "41":{
      "n":"Player Cosmetics",
      "p":3,
      "l":2
   },
   "42":{
      "n":"Player Status",
      "p":3,
      "l":2
   },
   "43":{
      "n":"Environment",
      "p":3,
      "l":2
   },
   "44":{
      "n":"Misc",
      "p":3,
      "l":2
   }
}
//var catsArray = Object.values(cats)



// // var categorySlug = null;
var initCats = [3]; // Categories to initialize when page loads
          
function getCatNavHTML(parentID){
  var catHTML = ''
  for(var i in cats){
    if(cats[i].p===parentID){
        catHTML += '<a href="/admin-commands/?commands=' + slugify(cats[cats[i]['p']]['n']) + '/' + slugify(cats[i].n) + '" class="boxIcon bpCat" data-cat="' + i + '">' + cats[i].n + '</a>';
    }
  }
  return catHTML;
}




function updateAttr() {
  level = $("#admin-search input[name=level]").val();
  distance = $("#admin-search input[name=distance]").val();
  distancey = $("#admin-search input[name=distancey]").val();
  distancez = $("#admin-search input[name=distancez]").val();
  quantity = $("#admin-search input[name=quantity]").val();
  quality = $("#admin-search input[name=quality]").val();
  blueprint = $("#admin-search input[name=blueprint]")[0].checked == true ? 1 : 0;
  xbox = $("#admin-search input[name=xbox]")[0].checked == true ? 1 : 0;
  gfi = $("#admin-search input[name=gfi]")[0].checked == true ? 1 : 0;
  tame = $("#admin-search input[name=tame]")[0].checked == true ? " | admincheat forcetame" : "";
  
  jQuery.each($('.bprd .bpb .bpbe'), function( i, val ) {
    $(val).text(distance + " " + distancey + " " + distancez + " " + level + " " + tame);
  });
  jQuery.each($('.bprw .bpb .bpbe'), function( i, val ) {
    $(val).text(quantity + " " + quality + " " + blueprint);
  });
  jQuery.each($('.bprw .bpb .bpbi'), function( i, val ) {
    var id = $(val).data("id")
    $(val).text(xbox ? (id-1) : id);
  });
}

function searchBP(category = null, searchCat = false){
  //TODO: first parameter is event, when called without any paramters
  // console.log('searchBP',category,searchCat)
  $(resultsEl).html('')
  
  var listItem = $('#list').children('li');
  var bpQuery = $('#bpQuery').val();
  if(bpQuery.length <= 1 && typeof category != 'string' && cat1 != 3){
    return;
  }

  // If a category is being searched, deselect any subcategories.
    // console.log('SEARCHBP O',category)
  if(typeof category != "string"){
    // console.log('SEARCHBP',category)
    $('*[data-level=2] .selected, *[data-level=3] .selected').removeClass('selected')
    $('*[data-level=3]').addClass('hidden')
  }

  if(cat1 == 3){ // Admin Commands
    var res = commands.filter(function(item) {
      var searchMatch = item.c.toUpperCase().includes(bpQuery.toUpperCase());

      var match = searchMatch;

      //If category is defined, search only in the category.
      if(typeof category == 'string' && item.t){
        var categoryMatch = item.t.toUpperCase().includes(category.toUpperCase());
        match = searchMatch && categoryMatch; // Both must be true
      }
      return match;
    });

    if(res.length > 0){
      lastType ='';
      for(var i in res){
        item = res[i];
        if(lastType != item.t){
          rowHeader = '<div class="bprh">' + item.t + '</div>';
          var rowClass = 'bprhh ';
        } else {
          var rowHeader = '';
          var rowClass = '';
        }

        var theLabel = item.id;
        var commandFormatted = item.c.replace(/<(.*?)>/g, '<span class="pillH">$1</span>'); // Pill each attribute
        commandFormatted = commandFormatted.replace(/^([\w\-]+)/,'<b class="white">$1</b>') // Bold first word

        rowClass += 'bprc';
        // console.log(theBP);
        lastType = item.t;
        var theHTML = rowHeader + '<div class="bpb">' + commandFormatted;
        if(item.d){
          theHTML += '<div class="marginTopS"><em>' + item.d + '</em></div>';
        }
        theHTML += '<div class="marginTop"><div class="whiteinputwb"><input type="text" size="50" value="' + item.e + '" /><a class="whiteinputb">COPY</a></div></div></div>';
        // console.log(theHTML);
        $('<li class="bpr ' + rowClass + '">')
        .append(theHTML)
        .appendTo(resultsEl);
      }
    } else {
      $(resultsEl).html(noDataHTML)
    }

  } else { // Dinos & Items
    // TODO: SWITCH TO JQUERY .FILTER() FOR ELEMENTS SO THEY DONT DELETE
    var res = bp.filter(function(item) {
      var searchMatch = item.label.toUpperCase().includes(bpQuery.toUpperCase());

      // Search only applies to one top level category at a time.
      var level1match = true;
      var isDino = item.t.toUpperCase() == "DINOS" || item.t.toUpperCase() == "ABERRATION" || item.t.toUpperCase() == "GENESIS" || item.t.toUpperCase() == "EXTINCTION" || item.t.toUpperCase() == "ALPHAS" || item.t.toUpperCase() == "TEK CREATURES" || item.t.toUpperCase() == "BOSSES" || item.t.toUpperCase() == "EVENT CREATURES";
      if(cat1 == 1 && isDino){
        level1match = true;
      } else if(cat1 == 2 && !isDino){
        level1match = true;
      } else {
        level1match = false;
      }

      // console.log(item.label,searchMatch,level1match);
      // Check if search is a match AND top level category is a match
      var match = searchMatch && level1match;

      //If category is defined, search only in the category.
      if(typeof category == 'string'){
        var categoryMatch = item.t.toUpperCase().includes(category.toUpperCase());
        match = searchMatch && categoryMatch; // Both must be true
      }
      return match;
    });

    level = $("#admin-search input[name=level]").val();
    distance = $("#admin-search input[name=distance]").val();
    distancey = $("#admin-search input[name=distancey]").val();
    distancez = $("#admin-search input[name=distancez]").val();
    quantity = $("#admin-search input[name=quantity]").val();
    quality = $("#admin-search input[name=quality]").val();
    blueprint = $("#admin-search input[name=blueprint]")[0].checked == true ? 1 : 0;
    gfi = $("#admin-search input[name=gfi]")[0].checked;
    xbox = $("#admin-search input[name=xbox]")[0].checked; // -1 for Xbox
    tame = $("#admin-search input[name=tame]")[0].checked == true ? " | admincheat forcetame" : "";

    if(res.length > 0){
      lastType ='';
      for(var i in res){
        item = res[i];
        if(lastType != item.t){
          rowHeader = '<div class="bprh">' + item.t + '</div>';
          var rowClass = 'bprhh ';
        } else {
          var rowHeader = '';
          var rowClass = '';
        }
        var theLabel = item.label;
        if(item.t=='Dinos' || item.t=='Aberration' || item.t=='Extinction' || item.t=='Genesis' || item.t=='Bosses' || item.t=='Alphas' || item.t=='Tek Creatures' || item.t=='Event Creatures') {
          var theBP = "admincheat SpawnDino \"Blueprint'/Game/" + item.bp + '\'" <span class="bpbe">' + distance + " " + distancey + " " + distancez + " " + level + "" + tame + "</span>";
          rowClass += 'bprd';
          if(item.cid){
            var theLabel = '<a href="https://www.dododex.com/taming/' + item.cid + '">' + item.label + '</a>';
          }
        } else if (gfi && item.g){
          var theBP = 'admincheat GFI ' + (item.g) + ' <span class="bpbe">' + quantity + " " + quality + " " + blueprint + "</span>";
          rowClass += 'bprw';
        } else if (item.id){
          var theBP = 'admincheat giveitemnum <span class="bpbi" data-id="' + item.id + '">' + (xbox ? item.id-1 : item.id) + '</span> <span class="bpbe">' + quantity + " " + quality + " " + blueprint + "</span>";
          rowClass += 'bprw';
        } else {
          var theBP = "admincheat giveitem \"Blueprint'/Game/" + item.bp + '\'" <span class="bpbe">' + quantity + " " + quality + " " + blueprint + "</span>";
          rowClass += 'bprw';
        }
        // console.log(theBP);
        lastType = item.t;
        var theHTML = rowHeader + '<div class="bpl">' + theLabel + '</div><div class="bpb">' + theBP + '</div>';
        // console.log(theHTML);
        $('<li class="bpr ' + rowClass + '">')
        .append(theHTML)
        .appendTo(resultsEl);
      }
    } else {
      $(resultsEl).html(noDataHTML)
    }
  }
}

$(document).ready(function() {
  var slugs = [];
  var level = $("#admin-search input[name=level]").val();
  var distance = $("#admin-search input[name=distance]").val();
  var distancey = $("#admin-search input[name=distancey]").val();
  var distancez = $("#admin-search input[name=distancez]").val();
  var quantity = $("#admin-search input[name=quantity]").val();
  var quality = $("#admin-search input[name=quality]").val();
  var blueprint = $("#admin-search input[name=blueprint]")[0].checked == true ? 1 : 0;
  var xbox = $("#admin-search input[name=xbox]")[0].checked; // -1 for Xbox
  var gfi = $("#admin-search input[name=gfi]")[0].checked; // -1 for Xbox
  var tame = $("#admin-search input[name=tame]")[0].checked == true ? " | admincheat forcetame" : "";
 
  resultsEl = $("#admin-results");
  $("#bpQuery").keyup(searchBP)    

  // $("#admin-results").on("click",'.bpr input',function(event) {
  //   event.stopPropagation()
  // })
  $("#admin-results").on("click",'.bpr:not(.bprc)',function() {
    $("<div class=\"copied\">").html("Copied!").insertAfter(this).hide().slideDown(200).delay(1000).slideUp("slow",function(){$(this).remove();});
  })
  $("#admin-results").on("click",'.bprc .whiteinputb',function() {
    $("<div class=\"copied\">").html("Copied!").insertAfter($(this).closest('.bprc')).hide().slideDown(200).delay(1000).slideUp("slow",function(){$(this).remove();});
  })
  // $(".bpCat").on("click",function() {
  //   category = $(this).data("cat");
  //   var categoryName = $(this).text()
  //   var categorySlug = categoryName.replace(/\s+/g, '-').toLowerCase();


  //   if(typeof $(this).data("pcat") != 'undefined'){
  //     console.log('child is clicked');
  //     // If child cat is clicked
  //     $("*[data-psec]").addClass('hidden');
  //     $("*[data-psec='"+categoryName+"']").removeClass('hidden');
  //     $("*[data-pcat]").removeClass('selected');
  //     var searchable = categoryName;
  //   } else {
  //     console.log('parent is clicked');
  //     // If parent cat is clicked
  //     $("*[data-cat]").removeClass('selected');
  //     if(tcat == "dinos" || tcat == "commands"){
  //       var searchable = "Dinos";
  //     }
  //   }
  //   $(this).addClass('selected');

  //   //If a user has searched, and is trying to filter results
  //   var filterSearch = false; 
  //   if($('#bpQuery').val() != ''){
  //     filterSearch = true;
  //   }

  //   // category = 'Dinos';
  //   searchBP(categoryName, filterSearch);
  //   window.history.pushState(null, categoryName + " | Admin Commands", "/admin-commands2/" + categorySlug);
  //   event.preventDefault()
  // // })
  // $("a").on("click",function(event) {
  //     console.log("PREVENT");
  //     event.preventDefault()
  //   })


  // $( "a" ).click(function( event ) {
  //   event.preventDefault();
  //     console.log("PREVENT DEFAULT");
  // });








 // Load blueprints
  $.getJSON( "../bp.json", function( data ) {
    $.each( data, function( key, val ) {
      bp = val;
    });
    bp.sort(sortByType);

    // Load commands
    $.getJSON( "../commands.json", function( data ) {
      $.each( data, function( key, val ) {
        commands = val;
      });
      commands.sort(sortByTypeC);
      initFromURL();
    });
  });

  function spinStop(event, ui){
      $(this).change();
  }

  $( "input[name=level]" ).spinner({min:1,step:1,stop:spinStop});
  $( "input[name=distance]" ).spinner({min:0,step:100,stop:spinStop});
  $( "input[name=distancey]" ).spinner({min:0,step:100,stop:spinStop});
  $( "input[name=distancez]" ).spinner({min:0,step:100,stop:spinStop});
  $( "input[name=quantity]" ).spinner({min:0,max:100,step:1,stop:spinStop});
  $( "input[name=quality]" ).spinner({min:0,max:100,step:1,stop:spinStop});
  $("#bpConfig input").change("change paste keyup", function() {
    updateAttr();
  })
  // Why was this needed?
  // $(".spinner").bind("keydown", function (event) {
  //     event.preventDefault();
  // });
  $(document).on('keydown', function(e) {
    if(e.keyCode == 17){
      ctrlOn = true;
      $('body').addClass('ctrlOn');
    }
  })

  $(document).on('keyup', function(e) {
    if(e.keyCode == 17){
      ctrlOn = false;
      $('body').removeClass('ctrlOn');
    }
  })

  // Create level 2 nav (Bosses, Tek Creatures, Structures...)
  $("*[data-level=2][data-catholder=1]").html(getCatNavHTML(1));
  $("*[data-level=2][data-catholder=2]").html(getCatNavHTML(2));
  $("*[data-level=2][data-catholder=3]").html(getCatNavHTML(3));


  // Create level 3 nav (Seeds, Kibble, Wood...)
  // var numCats = 0;
  var catHTML = ''
  for(var i in cats){
    // Find all categories at level 2
    if(cats[i].l===2){
      // Find all subcats for this category.
      var subCatHTML = '';
      for(var j in cats){
        if(cats[j].p==i){
            subCatHTML += '<a href="/admin-commands/' + slugify(cats[cats[j]['p']]['n']) + '/' + slugify(cats[j].n) + '" class="boxIcon bpCat" data-cat="' + j + '">' + cats[j].n + '</a>';
          // numCats++;
        }
      }
      // If there are subcats, add it to the HTML
      if(subCatHTML !== ""){
          catHTML += '<div class="flex hidden" data-catholder="' + i + '" data-level="3" style="justify-content:center;flex-wrap:wrap;">' + subCatHTML + '</div>';
      }
    }
  }
  $("#level3").html(catHTML)

  // $("a").on("click",function(event) {
  //     console.log("PREVENT");
  //     event.preventDefault()
  //   })




  $("*[data-cat]").on("click",function(event) {
    $('#bpQuery').val('')
    catID = $(this).data("cat");
    var cat = cats[catID];
    // console.log(cat);

    $("*[data-level=" + cat.l + "] *[data-cat]").removeClass('selected');
    $(this).addClass('selected');

    // TODO: At curent level or lower level
    if(cat.l == 1){
      // show 2, hide 3
      $("#admin-results").html(''); // Clear results on level 1 switch.
      $("*[data-level=" + cat.l + "] *[data-cat]").addClass('fadedImage');
      $(this).removeClass('fadedImage');
      $("*[data-catholder][data-level=3]").addClass('hidden');
      $("*[data-catholder][data-level=3] .selected").removeClass('selected');
      $("*[data-catholder][data-catholder!='"+cat.p+"']").addClass('hidden');
      cat1 = catID;
      if(catID == 1){
        $('#configDinos').show()
        $('#configWeapons').hide();
        $('#bpQuery').attr('placeholder',"Search creatures")
      }
      if(catID == 2){
        $('#configDinos').hide()
        $('#configWeapons').show();
        $('#bpQuery').attr('placeholder',"Search items")
      }
      if(catID == 3){
        $('#configDinos').hide()
        $('#configWeapons').hide();
        $('#bpQuery').attr('placeholder',"Search commands")
      }
    } else if (cat.l == 2){
      $("*[data-catholder][data-catholder!='"+cat.p+"']").addClass('hidden');
    } else if (cat.l == 3){

    }
    $("*[data-catholder='"+catID+"']").removeClass('hidden');
    // if(cat == "dinos"){
    //   $("*[data-pcat='Dinos'").trigger( "click" );
    // } else if(cat == "items"){
    //   $("*[data-pcat='Resources'").trigger( "click" );
    // }

    // For Dinos top level cat, default to Dinos subcat
    if(catID == 1){
      $('*[data-cat="4"]').trigger("click");
    }

    // cat = 'Dinos';
    if(cat.l == 3 || (cat.l == 2 && (cat1 == 1 || cat1 == 3))){
      // console.log('searching1')
      searchBP(cat.n);
    } else if ($('#bpQuery').val() != ""){
      // console.log('searching2')
      // User switched categories, but already had query already filled. Search it
      // searchBP(cat.n);
    }


    // Generate URL
    var curCat = cat; 
    var categorySlug = slugify(curCat.n);
    i = cat.l-1;
    while(i > 0){
      curCat = cats[curCat.p];
      categorySlug = slugify(curCat.n) + '/' + categorySlug;
      i--;
    }

    window.history.replaceState(null, null, "/admin-commands/?commands=" + categorySlug);
    if(catID == 3){
      document.title = cat.n + " | Admin Commands | Dododex";
    } else {
      document.title = cat.n + " | Spawn Codes | Dododex";
    }
    if(typeof event == "object"){
      console.log("PREVENT");
      event.preventDefault()
    }
  })







});

// Convert to JS
function getCatBySlug(slug, level, parent){
  for(var i in cats){
    if(slugify(cats[i]['n']) == slug && cats[i]['l'] == level && cats[i]['p'] == parent){
      returnCat = cats[i];
      returnCat['id'] = i;
      return returnCat;
    }
  }
}


function initFromURL(){
  var urlParams = new URLSearchParams(window.location.search);
  var commandPathString = urlParams.get('commands')
  var commandPath = commandPathString.split("/");

  if(commandPath[0] == 'dinos'){
    title = 'Spawn Codes';
    cat1id = 1;
  } else if (commandPath[0] == 'items') {
    title = 'Spawn Codes';
    cat1id = 2;
  } else {
    title = 'Admin Commands';
    cat1id = 3;
  }

  // Create an array of cats and subcats to initialize
  var initCats = [cat1id.toString()];
  var lastCat = null;

  if(commandPath[1]){
    // catToUse = commandPath[1];
    catLevelToUse = 1;
    cat2 = getCatBySlug(commandPath[1], 2, cat1id);
    lastCat = cat2;
    initCats.push(cat2['id']);
  }
  if(commandPath[2]){
    // catToUse = commandPath[2];
    catLevelToUse = 2;
    cat3 = getCatBySlug(commandPath[2], 3, cat2['id']);
    lastCat = cat3;
    initCats.push(cat3['id']);
  }

  // if($_GET['cat2'] || $_GET['cat3']){
  //   $title = $lastCat['n'] . ' | ' . $title;
  // }




  if(initCats == []){
    // If a URL is not defined
    $('*[data-cat="1"]').trigger("click");
  } else {
    // If a URL is defined
    var categorySlug = lastCat;

    var i = 3;
    lastParent = null;
    while (i > 0){
      // If a matching slug has not been found...
      if(lastParent == null){
        $.each(cats, function(k, v) {
          if(slugify(v.n) == categorySlug && v.l == i){
            // initCat[i] = cats[k];
            // initCat[i]['id'] = parseInt(k); //Add ID since it won't be the array's key.
            lastParent = cats[k].p;
            return;
          }
        });
      } else if(typeof lastParent == 'number') {
        //If a matching slug HAS been found, search for its parents.
        // initCat[i] = cats[lastParent];
        // initCat[i]['id'] = lastParent; //Add ID since it won't be the array's key.
        lastParent = cats[lastParent].p
      }
      // console.log('FOUND LEVEL: ' + i,initCat[i])
      // console.log('NEXT PARENT: ', lastParent)
      i--;
    }
    console.log("Initialize these cats",initCats);
    for(var i in initCats){
      // console.log('triggering category',initCat[i])
      $('[data-cat=' + initCats[i] + ']').trigger('click')
    }
  }
}


// TODO: Only get this if it's not already defined.
var bp = [];
var commands = [];

function sortByType(a, b) { /* Dinos / Weapons */
  if(a.t && b.t){
    var nameA = a.t.toUpperCase();
    var nameB = b.t.toUpperCase();
    if(nameA == nameB){
      if(a.label && b.label){
        nameA = a.label.toUpperCase();
        nameB = b.label.toUpperCase();
      }
    }
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
  }
  return 0;
}
function sortByTypeC(a, b) { /* Commands */
  if(a.t && b.t){
    var nameA = a.t.toUpperCase();
    var nameB = b.t.toUpperCase();
    if(nameA == nameB){
      if(a.c && b.c){
        nameA = a.c.toUpperCase();
        nameB = b.c.toUpperCase();
      }
    }
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
  }
  return 0;
}

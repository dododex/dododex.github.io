
var ctrlOn = true;
var cat1 = 3; // Top level cat
var category = null;
var noDataHTML = '<div class="light center marginTop2 marginBottom2"><b class="white">No results found.</b> Please <a href="https://docs.google.com/forms/d/e/1FAIpQLScdkF2Mtu0nfAsTxYa7eUMwXx-dyBGVMrj57kZomxgAhAHqsQ/viewform" target="_blank">report it</a> or <a href="https://github.com/dododex/dododex.github.io">add it</a>.</div>'

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
   "57":{
      "n":"Genesis 2",
      "p":1,
      "l":2
   },
   "58":{
      "n":"Lost Island",
      "p":1,
      "l":2
   },
   "59":{
      "n":"Fjordur",
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
   "47":{
      "n":"Emotes",
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
   },
   "48":{
      "n":"Visuals",
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
        catHTML += '<a href="/admin-commands/?commands=' + slugify(cats[cats[i]['p']]['n']) + '/' + slugify(cats[i].n) + '" class="boxIcon bpCat" data-cat="' + i + '">' + cats[i].n + '</a> ';
    }
  }
  return catHTML;
}




function updateAttr() {
  // console.log('updateAttr')
  // Get all the new attributes
  level = $("#admin-search input[name=level]").val();
  distance = $("#admin-search input[name=distance]").val();
  distancey = $("#admin-search input[name=distancey]").val();
  distancez = $("#admin-search input[name=distancez]").val();
  quantity = $("#admin-search input[name=quantity]").val();
  quality = $("#admin-search input[name=quality]").val();
  blueprint = $("#admin-search input[name=blueprint]")[0].checked == true ? 1 : 0;
  xbox = $("#admin-search input[name=xbox]")[0].checked == true ? 1 : 0;

  // Save the last state of these attributes so we can check if they swaped.
  var previousTamed = tamed;
  tamed = $("#admin-search input[name=tame]")[0].checked
  var previousGFI = gfi;
  gfi = $("#admin-search input[name=gfi]")[0].checked == true ? 1 : 0;

  tame = tamed ? " | admincheat forcetame" : "";

  // If GFI toggle changes, we need to refresh the search results since it's a whole new command
  if(previousGFI != gfi || previousTamed != tamed){
    // console.log('GFI OR TAMED CHANGED')
    // if(cats[catID].n){
    //   searchBP(cats[catID].n);
    // } else {
      searchBP();
    // }
  } else {
    jQuery.each($('.bprd .bpb .bpbe'), function( i, val ) {
      if(tamed){
        var theBP = level;
      } else {
        var theBP = distance + " " + distancey + " " + distancez + " " + level + "" + tame;
      }
      $(val).text(theBP);
    });
    jQuery.each($('.bprw .bpb .bpbe'), function( i, val ) {
      $(val).text(quantity + " " + quality + " " + blueprint);
    });
    jQuery.each($('.bprw .bpb .bpbi'), function( i, val ) {
      var id = $(val).data("id")
      $(val).text(xbox ? (id-1) : id);
    });
  }




}


function isDinoCat(category){
  // Checks if a category (string) is a dino category
  // Returns true or false
  if (typeof category !== "string") {
    return false;
  }

  return category.toUpperCase() == "DINOS" || category.toUpperCase() == "ABERRATION" || category.toUpperCase() == "GENESIS" || category.toUpperCase() == "GENESIS 2" || category.toUpperCase() == "EXTINCTION" || category.toUpperCase() == "LOST ISLAND" || category.toUpperCase() == "FJORDUR" || category.toUpperCase() == "ALPHAS" || category.toUpperCase() == "TEK CREATURES" || category.toUpperCase() == "BOSSES" || category.toUpperCase() == "EVENT CREATURES";

}


function searchBP(){
  //TODO: first parameter is event, when called without any paramters
  $(resultsEl).html('')
  
  var listItem = $('#list').children('li');
  var bpQuery = $('#bpQuery').val();

  // console.log('searchBP',cats[catID].n,cat1,bpQuery)

  if(bpQuery.length <= 0 && typeof catID != 'number' && cat1 != 3){
    return;
  }

  // console.log('searchBP bpQuery =',bpQuery)

  // If a category is being searched, deselect any subcategories.
    // console.log('SEARCHBP O',category)
  if(typeof catID != "number"){
    // console.log('SEARCHBP',category)
    $('*[data-level=2] .selected, *[data-level=3] .selected').removeClass('selected')
    $('*[data-level=3]').addClass('hidden')
  }

  
  if(cat1 == 3){ // ADMIN COMMANDS

    // De-select subcategories when searching
    if($('*[data-level=2] .selected, *[data-level=3] .selected').length > 0){
      $('*[data-level=2] .selected, *[data-level=3] .selected').removeClass('selected')
    }


    // Search admin commands
    if(catID == 3 && bpQuery.length == 0){
      // If no subcat is provided, just return all commands
      var res = commands;
    } else {
      // If subcat IS provided, return them
      var res = commands.filter(function(item) {
        // Check if QUERY matches the COMMAND 
        var searchMatch = item.c.toUpperCase().includes(bpQuery.toUpperCase());

        // Check if SELECTED CATEGORY also matches the CATEGORY (if one is selected)
        if(bpQuery.length == 0 && typeof cats[catID].n == 'string' && item.t){
          var categoryMatch = item.t.toUpperCase().includes(cats[catID].n.toUpperCase());
        } else {
          var categoryMatch = true; // Ignore categories
        }

        return searchMatch && categoryMatch;
      });
    }
    // console.log('res',res)

    // Contains results
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
        var commandFormatted = item.c.replace(/<(.*?)>/g, '<span class="pillH">$1</span>'); // Put each attribute in a pill
        commandFormatted = commandFormatted.replace(/^([\w\-]+)/,'<b class="white">$1</b>') // Bold first word

        rowClass += 'bprc';
        // console.log(theBP);
        lastType = item.t;

        // Generate the HTML
        var theHTML = rowHeader + '<div class="bpb">' + commandFormatted;
        if(item.d){
          theHTML += '<div class="marginTopS"><em>' + item.d + '</em></div>';
        }

        // Escape entities
        var eEscaped = item.e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

        theHTML += '<div class="marginTop"><div class="whiteinputwb"><input type="text" size="52" value="' + eEscaped + '" /><a class="whiteinputb">COPY</a></div></div></div>';
        
        // Append the HTML to the results element
        $('<li class="bpr ' + rowClass + '">')
        .append(theHTML)
        .appendTo(resultsEl);
      }
    } else {
      $(resultsEl).html(noDataHTML)
    }

  } else { // DINOS & ITEMS
    // TODO: SWITCH TO JQUERY .FILTER() FOR ELEMENTS SO THEY DONT DELETE

    // console.log('bp',bp)

    var res = bp.filter(function(item) {
      if(typeof item.l === "string"){
        var searchMatch = item.l.toUpperCase().includes(bpQuery.toUpperCase());
      } else {
        // Output error if item is missing label
        // console.log("NO LABEL",item)
      }


      // console.log('searchMatch',searchMatch)
      // Search only applies to one top level category at a time.
      // TODO: Support mixed results
      var level1match = true;
      var isDino = isDinoCat(item.t)
      if(cat1 == 1 && isDino){
        level1match = true;
      } else if(cat1 == 2 && !isDino){
        level1match = true;
      } else {
        level1match = false;
      }

      // console.log(item.l,searchMatch,level1match);
      // Check if search is a match AND top level category is a match
      var match = searchMatch && level1match;

      //If category is defined (and it's not a level-1 cat), search only in the category.
      if(typeof catID == 'number' && cats[catID]['p'] != null){
        var categoryMatch = item.t.toUpperCase().includes(cats[catID].n.toUpperCase());
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

    tamed = $("#admin-search input[name=tame]")[0].checked
    tame = tamed ? " | admincheat forcetame" : "";

    // console.log('res',res)

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
        var theLabel = item.l;
        if(isDinoCat(item.t)) {
          if(tamed){
            var theBP = 'admincheat gmsummon "' + item.id + '" <span class="bpbe">' + level + '</span>';
          } else {
            var theBP = "admincheat SpawnDino \"Blueprint'" + item.bp + '\'" <span class="bpbe">' + distance + " " + distancey + " " + distancez + " " + level + "" + tame + "</span>";
          }
          rowClass += 'bprd';
          // if(item.cid){
          //   var theLabel = '<a href="https://www.dododex.com/taming/' + item.cid + '">' + item.l + '</a>';
          // }
        } else if (gfi && item.g){
          var theBP = 'admincheat GFI ' + (item.g) + ' <span class="bpbe">' + quantity + " " + quality + " " + blueprint + "</span>";
          rowClass += 'bprw';
        } else if (item.id){
          var theBP = 'admincheat giveitemnum <span class="bpbi" data-id="' + item.id + '">' + (xbox ? item.id-1 : item.id) + '</span> <span class="bpbe">' + quantity + " " + quality + " " + blueprint + "</span>";
          rowClass += 'bprw';
        } else {
          var theBP = "admincheat giveitem \"Blueprint'" + item.bp + '\'" <span class="bpbe">' + quantity + " " + quality + " " + blueprint + "</span>";
          rowClass += 'bprw';
        }
        // console.log(theBP);
        lastType = item.t;
        var theHTML = rowHeader + '<div class="bpl"><a href="?id=' + slugify(theLabel) + '">' + theLabel + '</a></div><div class="bpb">' + theBP + '</div>';
        // console.log(theHTML);
        $('<li class="bpr ' + rowClass + '">')
        .append(theHTML)
        .appendTo(resultsEl);
      }
    } else {
      // console.log("NO RESULTS");
      $(resultsEl).html(noDataHTML)
    }
  }
}

$(document).ready(function() {
  // Display the header only if user is not in app
  var urlParams = new URLSearchParams(window.location.search);
  if(urlParams.get('app') != "1"){
    $('body').addClass('isweb')
  }


  var slugs = [];
  var level = $("#admin-search input[name=level]").val();
  var distance = $("#admin-search input[name=distance]").val();
  var distancey = $("#admin-search input[name=distancey]").val();
  var distancez = $("#admin-search input[name=distancez]").val();
  var quantity = $("#admin-search input[name=quantity]").val();
  var quality = $("#admin-search input[name=quality]").val();
  var blueprint = $("#admin-search input[name=blueprint]")[0].checked == true ? 1 : 0;
  var xbox = $("#admin-search input[name=xbox]")[0].checked; // -1 for Xbox
  var gfi = $("#admin-search input[name=gfi]")[0].checked;
  var tamed = $("#admin-search input[name=tame]")[0].checked;
  var tame = tamed ? " | admincheat forcetame" : "";
 
  resultsEl = $("#admin-results");

  // User types to search
  $("#bpQuery").keyup(function(){
    catID = cat1; // When user searches, reset the cat to the level 1 cat (de-selecting subcategories)
    searchBP()
  });    

  // $("#admin-results").on("click",'.bpr input',function(event) {
  //   event.stopPropagation()
  // })
  $("#admin-results").on("click",'.copy',function() {
    $("<div style=\"position:fixed;bottom:0;width:100%;padding:1em;box-sizing:border-box\"><div class=\"copied\">Copied!</div></div>").appendTo('body').hide().slideDown(200).delay(1000).slideUp("slow",function(){$(this).remove();});
  })
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


 // Load blueprints
  const cacheBreaker = Math.floor(Date.now() / (1000 * 60 * 60)); 
  $.getJSON( `https://www.dododex.com/api/bp.json?${cacheBreaker}`, function( data ) {
    bp = data.BP; // Assuming data is an array

    // Build the lookup table
    bp.forEach(function(item) {
      if (item.l) { // Ensure the label exists
        var keySlug = slugify(item.l);
        bpMap[keySlug] = item;
      }
    });

    bp.sort(sortByType);

    // Load commands
    $.getJSON("../commands.json", function(data) {
      commands = data.BP;
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

  // Update results whenever a user changes a config
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
      var parentCat = cats[i];
      var grandParentCat = cats[parentCat.p];
      for(var j in cats){
        // Find matching children
        if(cats[j].p==i){
          var commandSlug = slugify(grandParentCat['n']) + '/' + slugify(parentCat['n']) + '/' + slugify(cats[j].n)
          subCatHTML += '<a href="/admin-commands/?commands=' + commandSlug + '" class="boxIcon bpCat" data-cat="' + j + '">' + cats[j].n + '</a>';
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



  // User clicks on category
  $("*[data-cat]").on("click",function(event) {

    $('#bpQuery').val('')
    catID = $(this).data("cat");
    var cat = cats[catID];
    // console.log("THIS",$(this));
    // console.log("THIS",$(this).data());

    $("*[data-level=" + cat.l + "] .selected").removeClass('selected');
    $(this).addClass('selected');

    // TODO: At curent level or lower level
    if(cat.l == 1){
      // show 2, hide 3

      if($('.admin-subnav').is(':hidden')){
        $('.admin-subnav').show()
      }

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
      cat1 = cat.p;
    } else if (cat.l == 3){

    }
    $("*[data-catholder='"+catID+"']").removeClass('hidden');
    // if(cat == "dinos"){
    //   $("*[data-pcat='Dinos'").trigger( "click" );
    // } else if(cat == "items"){
    //   $("*[data-pcat='Resources'").trigger( "click" );
    // }


    //console.log('click on category',cat1,catID,cat)

    // For Dinos top level cat, default to Dinos subcat
    if(catID == 1){
      $('*[data-cat="4"]').trigger("click");
    }

    // cat = 'Dinos';
    if(catID == 3){
      // Return all admin commands
      searchBP();
    } else if(cat.l == 3 || (cat.l == 2 && (cat1 == 1 || cat1 == 3))){
      // console.log('searching1')
      searchBP();
    } else if ($('#bpQuery').val() != ""){
      // console.log('searching2')
      // TODO Maybe? User switched categories, but already had query already filled. Search it
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
      // console.log("PREVENT");
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

function getBPByID(id){
  var IDSlug = slugify(id);
  return bpMap[IDSlug] || null;
}

function initFromID(id){
  currentBP = getBPByID(id);
  // console.log('currentBP',currentBP)
  if(currentBP){
    document.title = currentBP.l + " Admin Command ID & GFI | Dododex";


// "l":"Malfunctioned Tek Triceratops",
// "id":"triceratops",
// "t":"Tek Creatures",
// "id":"BionicTrike_Character_BP_Malfunctioned_C",
// "bp":"PrimalEarth/Dinos/Trike/BionicTrike_Character_BP_Malfunctioned.BionicTrike_Character_BP_Malfunctioned"


  


    $(resultsEl).html('');


    if(isDinoCat(currentBP.t)){

      $(resultsEl).html(`
        <h1 class="marginBottom0 center">${currentBP.l} Spawn Commands</h1>
        ${currentBP.t ?
        `<p class="marginTop0 center">Type: <em class="light">${currentBP.t}</em></p>`
        : ``}

        ${currentBP.cid ?
          `<div class="marginTop2"><img src="https://www.dododex.com/media/creature/${currentBP.cid}.png" alt="ARK ${currentBP.l}" height="200" /></div>`
        : ``}

        ${currentBP.id ?
          `<p class="light">To spawn a ${currentBP.l}, you can use the GMSummon command "${currentBP.id}".</p>`
        : ``}

        ${currentBP.id ?
        `<h2 class="marginTop2">${currentBP.l} Spawn Command (Tamed)</h2>
        <p class="light">The spawn command for a tamed ${currentBP.l} is "${currentBP.id}".</p>
        
        <div class="whiteinputwb"><input type="text" size="100" value="cheat gmsummon &quot;${currentBP.id}&quot; 60" /><a class="whiteinputb copy">COPY</a></div></div>


        <div class="cmdi lightbox marginTop row">
          <div class="cmdi_td">
            <div class="cmdi_t">GMSummon</div>
            <div class="cmdi_d"></div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">"${currentBP.id}"</div>
            <div class="cmdi_d">Blueprint ID</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">150</div>
            <div class="cmdi_d">${currentBP.l} Level</div>
          </div>
        </div>
        ` : ``}

        ${currentBP.bp ?
        `<h2 class="marginTop2">${currentBP.l} Spawn Command (Wild)</h2>
        <p class="light">The blueprint path for the ${currentBP.l} is "Blueprint'${currentBP.bp}'". To spawn a wild ${currentBP.l}, use the following command.</p>
        
        <div class="whiteinputwb"><input type="text" size="100" value="cheat SpawnDino &quot;Blueprint'${currentBP.bp}'&quot; 500 0 0 150" /><a class="whiteinputb copy">COPY</a></div></div>


        <div class="cmdi lightbox marginTop row">
          <div class="cmdi_td">
            <div class="cmdi_t">SpawnDino</div>
            <div class="cmdi_d"></div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">"Blueprint'${currentBP.bp}'"</div>
            <div class="cmdi_d">Blueprint Path</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">500</div>
            <div class="cmdi_d">Spawn Distance (X) (larger number = further away from you)</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">0</div>
            <div class="cmdi_d">Spawn Distance (Y) (negative number = left, positive number = right)</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">0</div>
            <div class="cmdi_d">Spawn Distance (Z) (negative number = lower, positive number = higher)</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">150</div>
            <div class="cmdi_d">${currentBP.l} Level</div>
          </div>
        </div>
        ` : ``}


        ${currentBP.cid ?
          `<div class="marginTop2"><a class="actionButton" href="https://www.dododex.com/taming/${currentBP.cid}">${currentBP.l} on Dododex &raquo;</a></div>`
        : ``}



      `)


    } else {
      $(resultsEl).html(`
        <h1 class="marginBottom0">${currentBP.l}</h1>
        ${currentBP.t ?
        `<p class="marginTop0">Type: <em class="light">${currentBP.t}</em></p>`
        : ``}



        ${currentBP.g ?
        `<h2 class="marginTop2">${currentBP.l} GFI</h2>

        <p class="light">The GFI code for ${currentBP.l} is <b>${currentBP.g}</b>. Use this command to give yourself one or more ${currentBP.l}.</p>

        <div class="whiteinputwb"><input type="text" size="52" value="cheat gfi ${currentBP.g} 1 0 0" /><a class="whiteinputb copy">COPY</a></div>
        
        <div class="cmdi lightbox marginTop row">
          <div class="cmdi_td">
            <div class="cmdi_t">gfi</div>
            <div class="cmdi_d"></div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">${currentBP.g}</div>
            <div class="cmdi_d">Part of Blueprint Path</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">1</div>
            <div class="cmdi_d">Quantity</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">0</div>
            <div class="cmdi_d">Quality</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">0</div>
            <div class="cmdi_d">Item Blueprint? (0=No, 1=Yes)</div>
          </div>
        </div>
        ` : ``}


        ${currentBP.id ?
        `<h2 class="marginTop2">${currentBP.l} ID</h2>

        <p class="light">The item ID for ${currentBP.l} is <b>${currentBP.id}</b>.</p>

        <div class="whiteinputwb"><input type="text" size="52" value="cheat GiveItemNum ${currentBP.id} 1 0 0" /><a class="whiteinputb copy">COPY</a></div>

        <div class="cmdi lightbox marginTop row">
          <div class="cmdi_td">
            <div class="cmdi_t">GiveItemNum</div>
            <div class="cmdi_d"></div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">${currentBP.id}</div>
            <div class="cmdi_d">Item ID (increase by 1 for Xbox)</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">1</div>
            <div class="cmdi_d">Quantity</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">0</div>
            <div class="cmdi_d">Quality</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">0</div>
            <div class="cmdi_d">Item Blueprint? (0=No, 1=Yes)</div>
          </div>
        </div>` : ``}


        ${currentBP.bp ?
        `<h2 class="marginTop2">${currentBP.l} Blueprint Path</h2>
        <p class="light">The blueprint path for ${currentBP.l} is "Blueprint'${currentBP.bp}'"</p>
        
        <div class="whiteinputwb"><input type="text" size="100" value="cheat giveitem &quot;Blueprint'${currentBP.bp}'&quot; 1 0 0 " /><a class="whiteinputb copy">COPY</a></div></div>

        <div class="cmdi lightbox marginTop row">
          <div class="cmdi_td">
            <div class="cmdi_t">giveitem</div>
            <div class="cmdi_d"></div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">"Blueprint'${currentBP.bp}'"</div>
            <div class="cmdi_d">Part of Blueprint Path</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">1</div>
            <div class="cmdi_d">Quantity</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">0</div>
            <div class="cmdi_d">Quality</div>
          </div>
          <div class="cmdi_td">
            <div class="cmdi_t">0</div>
            <div class="cmdi_d">Item Blueprint? (0=No, 1=Yes)</div>
          </div>
        </div>
        ` : ``}

        `
      );
    }
  }

  var related = filterItems(currentBP.t);
  var relatedHTML = '';
  var i = 0;
  $.each(related, function(k, v) {
    // if(i > 10){
    //   return false;
    // }
    relatedHTML += `<li><a href="?id=${slugify(v.l)}" class="crLink">${v.l}</a></li>`
    i++;
  });


  $(resultsEl).append(`
    <h2 class="marginTop2">More ${currentBP.t}</h2>
    <ul class="creaturelist col3 light">
      ${relatedHTML}
    </ul>
  `);

}


function filterItems(category, commands = false){

  var res = bp.filter(function(item) {
    if(typeof category == 'string'){
      return item.t.toUpperCase().includes(category.toUpperCase());
    }
    return match;
  });
  return res;
}

function initFromURL(){
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id')
  var commandPathString = urlParams.get('commands')
  if(typeof id == "string"){
    initFromID(id);
    return;
  } else if(typeof commandPathString != "string"){
    // On main landing page, load the subnav.
    commandPathString = "commands=commands"
    // return;
  }
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
    // console.log("Initialize these cats",initCats);
    for(var i in initCats){
      // console.log('triggering category',initCat[i])
      $('[data-cat=' + initCats[i] + ']').trigger('click')
    }
  }
}


// TODO: Only get this if it's not already defined.
var bp = [];
var bpMap = {};
var commands = [];

function sortByType(a, b) { /* Dinos / Weapons */
  if(a.t && b.t){
    var nameA = a.t.toUpperCase();
    var nameB = b.t.toUpperCase();
    if(nameA == nameB){
      if(a.l && b.l){
        nameA = a.l.toUpperCase();
        nameB = b.l.toUpperCase();
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

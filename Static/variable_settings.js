/*
--SETTINGS--
number of initial stories--
DEFAULT: 0

number of displayed pages--
ERROR HANDLING:
if page more than total page
	TO DO:
else
	display pages



*/
var g_settings = {
	default_file_folder: "Text_sample/",

	story_number: 0,
	tabNumber: 20,
	tabMaxNumber: -1,
	dashboard_icon_margin: 200,
	paragraph_word_limit: 2500,
	sentiment_in_middle: true

};
used_assertion = {};

var display_settings = {
	outer_frame_width :6818,
	outer_frame_Height :2090,
	margin_top: 100,
	menu_left_shift: 0,
	menu_width: 50

	
}

var text_variables = {
	number_columns: 6,
	number_pages: -1,
	font_size: 8,
	margin_top: 150,
	margin_bottom: 150,
	height:display_settings.outer_frame_Height,
	width: 1080,
	empty_space: 10,
}

var sentiment_variables = {
	number_columns:1,
	number_pages: -1,
	margin_top: 150,
	margin_bottom: 150,
	height:display_settings.outer_frame_Height,
	width: 150,
	empty_space: 50
}

var menu_settings ={
    block_width: 50,
    actor_menu_margin_top: 50,
    location_menu_margin_top: display_settings.outer_frame_Height/5
}

var actor_showup = {
    margin_top: 10,
    margin_bottom: 10,
    margin_left: 10,
    total_width: display_settings.outer_frame_width,
    location_shift_on: false
}
/*
--CURRENT VARIABLES--

current text file path--
ERROR HANDLING:
if path == null
	set to default sample text.
else
	load files according to assigned file path.


*/

var g_current_variables = {
	current_text_file_path: "",
	current_json_path: "",
	//use this to control the json file length
	list_length_limit: ""
};

/*
TO DO:
	this should be adjusted according to window size. default is 3000
*/


var g_data ={
	opened_story: {},
	story_list: [],
	current_page_number: 1
}
var story_points = {};
var match_story = {};

var total_page_number = -1;
var current_page_number = 1;
var source_text = "../text_sample/austen-sense.txt";

var text_old = new Array();
var text_original = new Array();
var text_sentiment = new Array();

var text_separate_result = new Array();

//var max_sentence = 5;


var character_index = new Array();
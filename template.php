<?php

function dymoff_preprocess_page(&$vars, $hook) {
    if (isset($vars['node'])) { 
        $vars['theme_hook_suggestions'][] = 'page__'. str_replace('_', '--', $vars['node']->type);
    }
}

function date_creat_normal(&$data){
	return date('d.m.y', $data);
}

function my_list_element($id){
	if (($id % 2) == 1){ 
		$my_eq = 'odd';
	}

	if (($id % 2) == 0){ 
		$my_eq = 'even';
	}

	return $my_eq;
}

function is_url_active($uri, $href){
	$is_url = stripos($uri, $href);
	if($is_url !== false){
		return 'class="active"';
	}
}

/*
function modul_my_render($data, $is_admin = false){
	if($is_admin === true){
		$view = '<a class="edit_node_block" href="#overlay=admin/structure/block/manage/block/'.$data['bid'].'/configure" title="Редактировать"></a>';
		$view .= $data['body'];
		return $view;
	} else {
		return $data['body'];
	}
}*/

function dymoff_taxonomy_tree($vocabulary_name) {
	$vid = taxonomy_vocabulary_machine_name_load($vocabulary_name)->vid;
	$terms = taxonomy_get_tree($vid);
	return $terms;
}

function my_taxonomy_view($machine_name) {
	$voc = taxonomy_vocabulary_machine_name_load($vname);
	$query = new EntityFieldQuery();
	$result = $query
	  ->entityCondition('entity_type', 'taxonomy_term')
	  ->propertyCondition('name', '%'.$tname.'%','LIKE')
	  ->propertyCondition('vid', $voc->vid,'=')
	  ->execute();
	if ($result) return $result['taxonomy_term'];
	else return array();
}

function my_taxonomy_view_name($tid) {
	$result = db_query("SELECT name FROM {taxonomy_term_data} WHERE tid = :tid", array(':tid' => $tid))->fetchField();
	//$voc = taxonomy_vocabulary_machine_name_load($vname);
	/*$query = new EntityFieldQuery();
	$result = $query
	  ->entityCondition('entity_name', 'taxonomy')
	  //->propertyCondition('name', '%'.$tname.'%','LIKE')
	  ->propertyCondition('tid', $tid,'=')
	  ->execute();
	if ($result) return $result;
	else return array();*/
	return $result;
}


function print_rrr($arr){
    echo "<pre>";
    print_r($arr);
    echo "</pre>";
}


include('sites/all/themes/dymoff/Mobile_Detect.php');

function is_mobile(){
	
	$md = new Mobile_Detect;
	if($md->isMobile() && !$md->isTablet()){
		return true;
	} else {
		return false;
	}
}

//Typograf

include('sites/all/themes/dymoff/remotetypograf.php');

function typografy($text){
	$tp = new RemoteTypograf();
	
	$tp->htmlEntities();
	$tp->br (false);
	$tp->p (false);
	$tp->nobr (3);
	$tp->quotA ('laquo raquo');
	$tp->quotB ('bdquo ldquo');
	
	$result = $tp->processText($text);
	
	return $result;
}

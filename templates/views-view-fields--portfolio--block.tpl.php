
<? # print_rrr($row->_field_data); ?>

<? if($row->_field_data['nid']['entity']->field_map_pins_project['und'][0]['value'] == 1) : ?>
	<div id="modal_map" class="mmw_pin mmw_pin_project" data-code="px<?=$row->_field_data['nid']['entity']->nid;?>">
        <div class="hover_block hover_mmw" id="hover_modal_map" data-modal="px<?=$row->_field_data['nid']['entity']->nid;?>">
            <? if(!empty($row->_field_data['nid']['entity']->field_map_type['und'][0]['value'])) : ?>
                <p><?=$row->_field_data['nid']['entity']->field_map_type['und'][0]['value'];?></p>
            <? endif; ?>
        </div>
        <div class="mmw_pin_mobile_text">
			<h4><?=my_taxonomy_view_name($row->_field_data['nid']['entity']->field_city['und'][0]['tid']);?></h4>
            <h3><a href="../portfolio/<?=$row->_field_data['nid']['entity']->nid;?>"><?=$row->_field_data['nid']['entity']->title;?></a></h3>
            <div class="mpmt_params">
                <p class="mpmt_height">Высота <span class="red"><?=$row->_field_data['nid']['entity']->field_pc_params_height['und'][0]['value'];?></span></p>
                <p class="mpmt_dim">Диаметр <span class="red"><?=$row->_field_data['nid']['entity']->field_pc_params_diameter['und'][0]['value'];?></span></p>
            </div>
        </div>
    </div>
<? endif; ?>

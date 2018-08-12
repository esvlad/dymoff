<? if($node->nid == 24): ?>
	<div class="wrapper">
		<div class="mhp_images">
	  		<?= $node->field_tr_code['und'][0]['value'];?>
		</div>
		<? foreach($node->field_images['und'] as $field_images) : ?>
			<div class="mhp_images">
		  		<img data-src-mobile="/sites/default/files/styles/medium/public/<?= str_replace('public://','',$field_images['uri']); ?>" src="/sites/default/files/<?= str_replace('public://','',$field_images['uri']); ?>"/>
			</div>
		<? endforeach; ?>
		<div class="mhp_caption">
			<h5 class="city_name red"><?= $node->field_city_name['und'][0]['value'];?></h5>
			<h2 class="mhp__title"><?=$node->title;?></h2>
			<div class="mhp__text">
			    <p><span>Высота</span> <?= $node->field_pc_params_height['und'][0]['value'];?></p>
			    <p><span>Диаметр</span> <?= $node->field_pc_params_diameter['und'][0]['value'];?></p>
			    <p><span><?= $node->field_pc_params_other['und'][0]['value'];?></span></p>
			</div>
			<div class="button button_white mhp__button" id="button_popup" data-btn-text="Заказать" data-popup="order" data-id="<?=$node->nid;?>">
				<span>Заказать</span>
			</div>
		</div>
	</div>
<? else : ?>
	<? print render($content); ?>
<? endif; ?>
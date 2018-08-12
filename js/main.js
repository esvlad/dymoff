(function ($) {
    /************************************************************/

    function download_file(){
        $('#edit-submitted-resume-upload-button').trigger('click');
    }

    window.getNameFileVakans = function(str){

            if (str.lastIndexOf('\\')){
                var i = str.lastIndexOf('\\')+1;
            }
            else{
                var i = str.lastIndexOf('/')+1;
            }           
            var filename = str.slice(i);
            var uploaded = document.getElementById("fileformlabel");
            uploaded.innerHTML = filename;
            if(filename != ''){
                setTimeout(function(){
                    $('input#edit-submitted-resume-upload-button[name="submitted_resume_upload_button"]').click();
                    console.log('clicked');
                },500);
                
            }
           // console.log(filename);
    };

    

    window.winWidth = $(window).width();
    console.log(winWidth);

    $(document).ready(function () {

        var w_top = 0;
        /*if($('body').hasClass('front')){
            var h_top = $('.main_history').offset().top;
        }*/
        var position_scroll_top;
        $(window).bind('scroll',function(){
            position_scroll_top = $(this).scrollTop();

            if (position_scroll_top > w_top) {
                if(winWidth == 1024){
                    if(position_scroll_top > 95){
                        $('.header').addClass('headerhidden');
                    }
                } else if(winWidth >= 768 && winWidth < 1024){
                    if(position_scroll_top > 80 && $('.site_menu > ul').css('display') != 'block'){
                        $('.header').addClass('headerhidden');
                    }
                } else {
                    if(position_scroll_top > 60 && $('.site_menu > ul').css('display') != 'block'){
                        $('.header').addClass('headerhidden');
                    }
                }

                /*if(h_top){
                    if(position_scroll_top > h_top){
                        $('.header').css('background','#000');
                    } else {
                        if(!$('body').hasClass('modal-open')) $('.header').css('background','transparent');
                    }
                }*/
            } else {
                $('.header').removeClass('headerhidden');
                /*if(h_top){
                    if(position_scroll_top > (h_top - 125)){
                        $('.header').css('background','#000');
                    } else {
                        $('.header').css('background','transparent');
                    }
                }*/
            }

            w_top = position_scroll_top;

            // console.log(position_scroll_top);
        });
        $(window).trigger('scroll');
		
		if(winWidth < 768){
			$('.mhp__text br').detach();

            $('.file_formated').appendTo($('.popup.popup_vc_form .webform-client-form .form-item.webform-component--resume'));

            
            var data_mhp_list_width = 0;
            $('.mhp_list__link > .mhp_link').each(function(){
                data_mhp_list_width += $(this).width();
            });
            //$('.mhp_list__link').width(data_mhp_list_width);

            $('.main_head_product .content_mhp').click(function(){
                if($('.main_head_product .mhp_caption').css('display') != 'block'){
                    $('.main_head_product .content_mhp_list, .main_head_product .mhp_images').fadeOut(200);
                    $('.main_head_product .mhp_caption').delay(150).fadeIn(200);
                }
            });
			
			if($('body').hasClass('page-node-2')){
				var cc_image;
				$('.cc_view_block').each(function(){
					cc_image = $(this).find('.cc_view_block_images > img');
					$(this).find('.cc_view_block_text > h3').after(cc_image);
				});
			}

            $('.main_history .history_block__col:first').after('<div id="mb_histry" class="button button_history">Читать целиком</div>');

            $('#mb_histry').on('click',function(){
                $(this).detach();
                $('.main_history .history_block__col:first').addClass('mb_active');
                $('.main_history .history_block__col:last').slideDown(200);
            });

            $('.main_map_work .map_work').after('<a href="../portfolio" class="button mmw_pin_mobile_button">В Портфолио</a>');

            $('.contacts .contact_map > p').addClass('contacts_yur_addr').insertAfter($('.contacts h2'));
            $('.contacts .contact_block.cb__social').after('<div style="float:none;clear:both;"></div><div id="button_contant" class="button button_mb_contacts" data-popup="order">Заказать звонок</a>');

            $('div#button_contant').on('click',function(){
                $('#button_popup').trigger('click');
            });

            $('.main_products .mp_views').before('<div class="main_mb_trubs_slider"><div class="mmtrubs_dot mmtrubs_dot_left"></div><div class="mmtrubs_dot mmtrubs_dot_right"></div></div>');
		
            $('.main_products .mp_views__view:first').addClass('active');

            var mvv_active;
            var mvv_count = $('.main_products .mp_views__view').length;
            $('.main_mb_trubs_slider > div').on('click',function(){
                $('.main_products .mp_views__view').each(function(){
                    if($(this).css('display') == 'block'){
                        mvv_active = $(this).index();
                        $(this).fadeOut(200);
                    }
                });

              //  console.log(mvv_count);

                if($(this).hasClass('mmtrubs_dot_left')){
                    $('.main_products .mp_views__view').eq(--mvv_active).delay(180).fadeIn(200);
                } else {
                    ++mvv_active
                    if(mvv_active == mvv_count) mvv_active = 0;
                    $('.main_products .mp_views__view').eq(mvv_active).delay(180).fadeIn(200);
                }
            });

            $('.contacts.page .block_company_name').insertBefore('.contacts.page .yamaps_contact');

            /*if(winWidth < 480){
                $('.production .products_image').each(function(){
                    $(this).css('background','url('+$(this).attr('data-src-large')+') no-repeat');
                });
            }*/

            //$('.vc_form_after_text').insertBefore($('.popup.popup_vc_form .webform-client-form .form-actions'));
        } else {
            //$('#edit-submitted-resume-ajax-wrapper').insertBefore($('.popup.popup_vc_form .webform-client-form .webform-component--name'));
           // $('.vc_form_after_text').insertBefore($('.popup.popup_vc_form .webform-client-form .webform-component--phone'));
           // $('.popup.popup_vc_form .webform-client-form .form-actions').appendTo($('.vc_form_after_text'));
           // $('.popup.popup_vc_form .webform-client-form .form-actions').attr('data-btn-text',$('.popup.popup_vc_form .webform-client-form .form-actions input').val());
        }

        /*if(winWidth <= 768){
            $('.mhp_images > img').each(function(){
                $(this).attr('src',$(this).attr('data-src-mobile'));
            });
        }*/

        if(winWidth <= 1024){
            $('.contacts .contact_block.cb__social > a').text('');

            $('.site_logo').append('<span id="mb_menu" class="site_mobile_menu"></span>');

            $('#mb_menu').on('click',function(){
                if($(this).hasClass('smm_close')){
                    $('.site_menu > ul').slideUp(200);
                    $(this).removeClass('smm_close');
                    $('body').removeClass('modal-open');
                    $('.sect.header').removeClass('fixed');
                } else {
                //    console.log($('.header').css('background-color'));
                    if($('.header').css('background-color') == 'rgba(0, 0, 0, 0)'){
                        $('.header').css('background','#000');
                    }
                    $('.site_menu > ul').slideDown(200);
                    $(this).addClass('smm_close');
                    $('body').addClass('modal-open');
                    $('.sect.header').addClass('fixed');
                }
            });

            $('.contact_block.cb__phone > p').each(function(){
                if($(this).index() > 0){
                    var tel_text_e = $(this).text();
                    $(this).html('<a href="tel:'+tel_text_e+'">'+tel_text_e+'</a>');
                }
            });
        }

        

        if(location.pathname == '/'){
            $('.main_news .news_views').after('<a class="button news_button" href="../news" target="self" data-text="Читать все новости">Читать все новости</a>');
        }

        /*$('div#fileformlabel').bind('click', function(){
            console.log(213123);
            $('.form_file input[type="file"]').trigger('click');
        });*/

        var pfc_i = 0;
        $('.pf_conent_sorted').each(function(){
            if((pfc_i % 2) != 1){
                $(this).appendTo($('.portfolio_content_col.pfcol_right'));
                $(this).attr('data-sort',pfc_i)
            } else {
                $(this).appendTo($('.portfolio_content_col.pfcol_left'));
                $(this).attr('data-sort',(pfc_i + 2))
            }
            pfc_i++;
        });

        $('.vacancy_block_popup').each(function(){
            $('body').append($(this));
        });

        var vc_id;
        $('p#vc_more, span#vc_more').click(function(){
            //console.log(vc_id);
            if(winWidth < 768){
                if(location.pathname == '/company'){
                    $('.vacancy_block_popup').fadeIn(200);
                } else {
                    vc_id = $(this).parent().parent().attr('data-vacancy-id');
                    $('.vacancy_block_popup[data-vacancy-id="'+vc_id+'"]').fadeIn(200); 
                }
                $('body').addClass('modal-open');
            } else {
                if(location.pathname == '/company'){
                    $('.vacancy_block_popup').css('top',(position_scroll_top - (-50))).fadeIn(200);
                } else {
                    vc_id = $(this).parent().parent().attr('data-vacancy-id');
                    $('.vacancy_block_popup[data-vacancy-id="'+vc_id+'"]').css('top',(position_scroll_top - (-50))).fadeIn(200); 
                }
            }
        });

        $('h2#customer, h3#customer').click(function(){
            var data_customer = $(this).attr('data-customer');
            if(!$('.customers_logo[data-customer="'+data_customer+'"]').hasClass('active')){
                $('.customers_logo.active').fadeOut(300);
                $('.customers_logo[data-customer="'+data_customer+'"]').delay(300).fadeIn(300);
                setTimeout(function(){
                    $('.customers_logo.active').removeClass('active');
                    $('.customers_logo[data-customer="'+data_customer+'"]').addClass('active');
                }, 310);
            }
        });

        $('.vacancy_block_popup > .popup_close').click(function(){
            $(this).parent().fadeOut(200);
            if(winWidth < 768){
                $('body').removeClass('modal-open');
            }
        });

        $('div#send_resume').click(function(){
            if(winWidth > 767) $('#vc_form').css('top',position_scroll_top);

            if($(this).parent().hasClass('vacancy_block_popup')){
                $('.vacancy_block_popup > .popup_close').trigger('click');
                $('#vc_form').delay(180).fadeIn(200);
            } else {
                $('#vc_form').fadeIn(200);
            }
            var vc_name = $(this).parent().children('.vacancy_block__title').text();
            $('.nazvanie_vakansii').val(vc_name);
            $('#vc_name').text(vc_name);
            if(winWidth < 768){
                $('body').addClass('modal-open');
            }
        });

        $('#vc_form > .popup_close').click(function(){
            $('#vc_form').fadeOut(200);
            if(winWidth < 768){
                $('body').removeClass('modal-open');
            }
        });

        var pf_content_block = 0;
        var set_block_timer = 100;
        $('.gt_block').each(function () {
            $(this).find('.explantation').appendTo($(this).find('.exp'));
            $(this).delay(set_block_timer).animate({ 'opacity': 1 }, 500);
            set_block_timer += 700;
        });
        $('.guarantees .contacts_form').delay(set_block_timer).animate({ 'opacity': 1 }, 500);

        var data_vacancy_timer = 100;
        $('.vacancy .vacancy_block').each(function () {
            $(this).delay(data_vacancy_timer).animate({ 'opacity': 1 }, 400);
            data_vacancy_timer += 200;
        });

        var data_portfolio = $('.portfolio_content');
        var data_portfolio_timer = 100;
        for(var p = 0; p <= data_portfolio.length; p++){
            $('.portfolio_content[data-id="'+p+'"]').delay(data_portfolio_timer).animate({ 'opacity': 1 }, 400);
            data_portfolio_timer += 200;
        }

        var data_news = $('.page-news .main_news .news_block');
        var data_news_timer = 100;
        for(var n = 1; n <= data_news.length; n++){
            $('.page-news .main_news .news_block[data-id="'+n+'"]').delay(data_news_timer).animate({ 'opacity': 1 }, 400);
            data_news_timer += 200;
        }

        var is_news_page = 1;
        var is_news_id = 7;
        var for_news = is_news_id;
        var data_ng_timer = 100;
        $('.main_news .news_button').click(function(e){
            e.preventDefault();
            console.log($(this).attr('href'))
            url_page = $(this).attr('href');
            $.ajax({
                type: "GET",
                url: '/news?page='+is_news_page,
                dataType: 'html',
                success: function(html){
                    if($(html).find('.allnews .news_block').length != 0){
                        $('body').append('<div id="addnews" style="display:none;"/>');
                        $('#addnews').html($(html).find('.allnews .news_block'));
                        $('#addnews .news_block').each(function(){
                            $(this).attr('data-id',is_news_id);
                            if($(this).hasClass('news_list_odd')){
                                $('.main_news .news_views .news_col_left').append($(this));
                            } else {
                                $('.main_news .news_views .news_col_right').append($(this));
                            }
                            is_news_id++;
                        });

                        for(var n = for_news; n <= is_news_id; n++){
                            $('.main_news .news_views .news_block[data-id="'+n+'"]').delay(data_ng_timer).animate({ 'opacity': 1 }, 400);
                            data_ng_timer += 200;
                        }

                        for_news = is_news_id;
                        data_ng_timer = 100;
                        is_news_page++;
                    } else {
                        $('.main_news .news_button').detach();
                    }

                    if($(html).find('.allnews .news_block').length < 7){
                        $('.main_news .news_button').detach();
                    }
                }
            });
        });

        var is_pf_page = 1;
        var is_pf_id = 7;
        var for_pf = is_news_id;
        var data_pg_timer = 100;
        $('.portfolio .news_button').click(function(e){
            e.preventDefault();
            console.log($(this).attr('href'))
            url_page = $(this).attr('href');
            $.ajax({
                type: "GET",
                url: '/portfolio?page='+is_pf_page,
                dataType: 'html',
                success: function(html){
                    if($(html).find('.portfolio_content_row .portfolio_content').length != 0){
                        if(is_pf_page == 1){
                            $('.portfolio .content')
                                .append('<div class="portfolio_content_col pfcol_left pcc_2"/>')
                                .append('<div class="portfolio_content_col pfcol_right pcc_2"/>');
                        }
                        $('body').append('<div id="addnews" style="display:none;"/>');
                        $('#addnews').html($(html).find('.portfolio_content_row .portfolio_content'));
                        $('#addnews .portfolio_content').each(function(){
                            $(this).attr('data-id',is_pf_id);
                            if(is_pf_id % 2 != 0){
                                $('.portfolio_content_col.pfcol_left.pcc_2').append($(this));
                            } else {
                                $('.portfolio_content_col.pfcol_right.pcc_2').append($(this));
                            }
                            

                            is_pf_id++;
                        });

                        for(var n = for_pf; n <= is_pf_id; n++){
                            $('.portfolio .portfolio_content[data-id="'+n+'"]').delay(data_pg_timer).animate({ 'opacity': 1 }, 400);
                            data_pg_timer += 200;
                        }

                        setTimeout(function(){
                            
                            $('.pf_conent_sorted').each(function(){
                                $(this).find('.pc_block_hovers').html('<div class="button pc_block__view_btn">Подробнее</div>');
                                var imgpfajax = $(this).find('.pc_block__images > img').height();
                                $(this).find('.pc_block__images').css('height',imgpfajax+'px');
                                console.log('setter');
                            });
                        }, 500);

                        for_pf = is_pf_id;
                        data_pg_timer = 100;
                        is_pf_page++;
                    } else {
                        $('.portfolio .button').detach();
                    }

                    if($(html).find('.portfolio_content_row .portfolio_content').length < 7){
                        $('.portfolio .button').detach();
                    }
                }
            });
        });

        $('.gt_block .exp').appearHover();

        var owl = $('#owl_carousel');

        owl.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            loop: true,
            center: true,
            mouseDrag: false,
            nav: true,
            navText: [
                '',
                ''
            ]
        });

        var owldot_i = 1;
        $('#owl_carousel .owl-dots > .owl-dot').each(function () {
            $(this).attr('data-slide', owldot_i++);
        });

        var all_dots = $('#owl_carousel .owl-dots > .owl-dot');
        $('.pf_views__view__gallery #all').text(all_dots.length);
        owl.on('changed.owl.carousel', function (e) {
            $('.pf_views__view__gallery #is').text(++e.page.index);
        });

        $('.main_map_work .map_work > .all_pins > .mmw_pin').each(function(){
            if($(this).hasClass('mmw_pin_project')){
                $(this).appendTo($('.main_map_work .map_work > #projects'));
            }

            if($(this).hasClass('mmw_pin_city')){
                $(this).appendTo($('.main_map_work .map_work > #cities'));
            }
        });
        //$('.main_map_work .map_work > .all_pins').detach();

        $('.switch_case > span').click(function () {
            var data_swcase = $(this).attr('data-mw-type');
            var data_swpins = $('.map_pins.active').attr('id');
            if (data_swcase != data_swpins) {
                $('.map_pins, .switch_case span').removeClass('active');
                $(this).addClass('active');
                $('#' + data_swcase + '.map_pins').addClass('active');
            }
         //   console.log(123);
        });

        var mmw_modal, mmw_hover;
        $('.mmw_pin').hover(function () {
            mmw_modal = $(this).attr('data-code');
            mmw_hover = $('#hover_modal_map[data-modal="' + mmw_modal + '"]');
            mmw_hover.fadeIn(200);
        }, function () {
            mmw_hover.fadeOut(200);
        });

        var data_popup;
        $('#button_popup').click(function () {
            data_popup = $(this).attr('data-popup');
            if(winWidth > 767){
                $('#popup[data-popup="' + data_popup + '"]').css('top',position_scroll_top).fadeIn(200);
            } else {
                $('#popup[data-popup="' + data_popup + '"]').fadeIn(200);
            }
            $('body').addClass('modal-open');
            $('#close').click(function () {
                $('#popup[data-popup="' + data_popup + '"]').fadeOut(200);
                setTimeout(function(){
                    $('body').removeClass('modal-open');
                },200);
            });
        });

        $(document).mouseup(function (e) {
            if ($('body').hasClass('.html')) {
                var container = $('#popup');
                if (container.has(e.target).length === 0) {
                    $('#popup').fadeOut(200);
                }
            }
        });

        var cc_block_activ = 1, cc_block_clicked;
        $('.cc_pin').click(function () {
            cc_block_clicked = $(this).attr('data-cc-block');
            if (cc_block_clicked != cc_block_activ) {
                $('.cc_pin').removeClass('active');
                $(this).addClass('active');
                $('.cc_view_block.active').fadeOut(200);
                $('.cc_view_block[data-cc-block="' + cc_block_clicked + '"]').fadeIn(200).addClass('active');
                setTimeout(function () {
                    $('.cc_view_block.active').removeClass('active');
                    $('.cc_view_block[data-cc-block="' + cc_block_clicked + '"]').addClass('active');
                }, 250);
                cc_block_activ = cc_block_clicked;
            }
        });

        var sl_products_image_height, sl_pi = 1200;
        $('.sect.production > .products_image').each(function () {
            sl_products_image_height = $(this).height();
            if (sl_products_image_height < sl_pi) {
                sl_pi = sl_products_image_height;
            }
        });

        //$('.sect.production').css('height', sl_pi + 'px');

        var pr_more_block_h;
        $('.pr_more_block').each(function () {
            pr_more_block_h = $(this).innerHeight();
            $(this).css('bottom', '-' + (pr_more_block_h / 2 - 15) + 'px');
        });

        var pr_more_clicked;
        $('div#pr_more_view').click(function () {
            if ($(this).next().css('display') != 'block') {
                $(this).next().fadeIn(200);
            } else {
                $(this).next().fadeOut(200);
            }
        });

        $('.pr_more_block > #close').click(function () {
            $(this).parent().fadeOut(200);
        });

        var sl_pin_active = 1, sl_pin_clicked;
        var prscroll = true;
        $('.production .sl_pin').click(function () {
            sl_pin_clicked = $(this).attr('data-sl-id');

            if (sl_pin_clicked != sl_pin_active) {
            	if($('.slider_text.active').find('.pr_more_block').css('display') == 'block'){
            		$('.slider_text.active').find('.pr_more_block').css('display', 'none');
            	}

                $('.sl_pin.active').removeClass('active');
                $(this).addClass('active');
                $('.slider_info > .number_slide').removeClass('active');
                $('.slider_text').removeClass('active').css('z-index', 3);

                $('.products_image.active').removeClass('active');
                $('.products_image[data-product-id="' + sl_pin_clicked + '"]').addClass('active');
                $('.slider_info > .number_slide').text(sl_pin_clicked);
                $('.slider_info > .number_slide').addClass('active');
                $('.slider_text[data-sl-step="' + sl_pin_clicked + '"]').addClass('active').css('z-index', 5);

                sl_pin_active = sl_pin_clicked;
            }
        });

        var delta, eqm, eqp;

        function pr_scroll(eq_i){
            if(location.pathname == '/production'){
                $('.slider_info_dots > .sl_pin').eq(eq_i).trigger('click');
            } else if(location.pathname == '/company'){
                $('.company .cc_views .cc_pin').eq(eq_i).trigger('click');
            }
            
            prscroll = false;
            setTimeout(function(){
                prscroll = true;
            },800);
        }

        if($('body').hasClass('page-production')){
            var production_top = $('.sect.production').offset().top;
        }

        if($('body').hasClass('page-node-2')){
            $('.arrow_slide_btn').click(function(e){
                pr_scroll($(this).attr('data-cc-block') - 1);

                var now_cc = $(this).attr('data-arrow-btn');
                var cc_block_prev = $('.arrow_slide_btn[data-arrow-btn="prev"]');
                var cc_bp_num = cc_block_prev.attr('data-cc-block');
                var cc_block_next = $('.arrow_slide_btn[data-arrow-btn="next"]');
                var cc_bn_num = cc_block_next.attr('data-cc-block');

               // if(cc_bp_num)
                
                if(now_cc == 'next'){
                    ++cc_bp_num;
                    ++cc_bn_num;
                    if(cc_bp_num == 5) cc_bp_num = 1;
                    if(cc_bn_num == 5) cc_bn_num = 1;
                } else {
                    --cc_bp_num;
                    --cc_bn_num;
                    if(cc_bp_num == 0) cc_bp_num = 4;
                    if(cc_bn_num == 0) cc_bn_num = 4;
                }

                $('.arrow_slide_btn[data-arrow-btn="prev"]').attr('data-cc-block',cc_bp_num);
                $('.arrow_slide_btn[data-arrow-btn="next"]').attr('data-cc-block',cc_bn_num);
            });
        }

        if($('body').hasClass('page-production')){
            $('.arrow_slide_btn').click(function(e){
                pr_scroll($(this).attr('data-cc-block') - 1);

                var now_cc = $(this).attr('data-arrow-btn');

                var cc_block_prev = $('.arrow_slide_btn[data-arrow-btn="prev"]');
                var cc_bp_num = cc_block_prev.attr('data-cc-block');
                var cc_block_next = $('.arrow_slide_btn[data-arrow-btn="next"]');
                var cc_bn_num = cc_block_next.attr('data-cc-block');

               // if(cc_bp_num)
                if(now_cc == 'next'){
                    ++cc_bp_num;
                    ++cc_bn_num;
                    if(cc_bp_num == 6) cc_bp_num = 1;
                    if(cc_bn_num == 6) cc_bn_num = 1;
                } else {
                    --cc_bp_num;
                    --cc_bn_num;
                    if(cc_bp_num == 0) cc_bp_num = 5;
                    if(cc_bn_num == 0) cc_bn_num = 5;
                }

                $('.arrow_slide_btn[data-arrow-btn="prev"]').attr('data-cc-block',cc_bp_num);
                $('.arrow_slide_btn[data-arrow-btn="next"]').attr('data-cc-block',cc_bn_num);
            });
        }

        /*var pr_top_scroll, prelem, scrollTo, scrollFrom, pins_count;
        if(location.pathname == '/production'){
            pins_count = $('.slider_info_dots > .sl_pin').length;
            scrollTo = 200;
            scrollFrom = 400;
        } else if(location.pathname == '/company'){
            pins_count = $('.company .cc_views .cc_pin').length;
            scrollTo = 240;
            scrollFrom = 450;
        }*/

        var pr_top_scroll;
        $(window).bind('scroll',function(event){
            pr_top_scroll = $(this).scrollTop();
            
            /*console.log(pr_top_scroll);
            if(pr_top_scroll >= 200 && pr_top_scroll <= 300){
                /*
                event.preventDefault();
                $(this).on('mousewheel', function(e){
                    if(pr_top_scroll >= 270 && pr_top_scroll <= 310){
                        e.preventDefault();
                    }
                });
                console.log('stop');
            } 
                $(this).on('mousewheel', function(e) {
                    delta = e.originalEvent.deltaY;
                    if(location.pathname == '/production'){
                        prelem = $('.slider_info_dots > .sl_pin.active').attr('data-sl-id');
                    } else if(location.pathname == '/company'){
                        prelem = $('.company .cc_views .cc_pin.active').attr('data-cc-block');
                    }
                    
                    eqm = prelem - 2;
                    eqp = prelem;

                    if(pr_top_scroll >= scrollTo && pr_top_scroll <= scrollFrom){
                        
                        console.log('c = '+pins_count+'; scrollTo = '+scrollTo+'; scrollFrom = '+scrollFrom);
                        if(prelem == pins_count){
                            if(delta < 0){
                                e.preventDefault();
                                if(prscroll == true){
                                    pr_scroll(pins_count - 2);
                                }
                            } 
                        } else if(prelem == 1){
                            if(delta > 0){
                                e.preventDefault();
                                if(prscroll == true){
                                    pr_scroll(1);
                                }
                            } 
                        } else {
                            e.preventDefault();
                            if(prscroll == true){
                                if(delta > 0){
                                    pr_scroll(eqp);
                                } else {
                                    pr_scroll(eqm);
                                }
                            }
                        }
                    }
                        

                    //console.log('delta = '+delta+'; prelem = '+prelem);
                });*/
        });

        
        /*if(location.pathname == '/company'){
            $('.sect.company').on('mousewheel', function(e) {
                delta = e.originalEvent.deltaY;
                prelem = $('.company .cc_views .cc_pin.active').attr('data-cc-block');
                eqm = prelem - 2;
                eqp = prelem;

                if(pr_top_scroll >= 270 && pr_top_scroll <= 350){
                    if(prelem == 4){
                        if(delta < 0){
                            e.preventDefault();
                            if(prscroll == true){
                                pr_scroll(2);
                            }
                        } 
                    } else if(prelem == 1){
                        if(delta > 0){
                            e.preventDefault();
                            if(prscroll == true){
                                pr_scroll(1);
                            }
                        } 
                    } else {
                        e.preventDefault();
                        if(prscroll == true){
                            if(delta > 0){
                                pr_scroll(eqp);
                            } else {
                                pr_scroll(eqm);
                            }
                        }
                    }
                }

                //console.log('prscroll = '+pr_top_scroll+'; delta = '+delta+'; prelem = '+prelem);
            });
        }*/

        $('.production .slider_text + .products_image').each(function(){
            $(this).insertBefore($('.production > .wrapper'));
        });

        var data_btn_text
        $('input[type="submit"], .btn, .button').each(function(){
            if($(this).hasClass('webform-submit')){
                data_btn_text = $(this).val();
            } else {
                data_btn_text = $(this).text();
            }
            $(this).attr('data-btn-text',data_btn_text);
        });

        /*$('#edit-webform-ajax-submit-4').on('click', function(e){
            if($('#fileformlabel').text() == 'Прикрепить файл'){
                e.preventDefault();
            }
        });*/

        var is_popup_doc = 0;
        $('.company_document .view_docs > a').on('click',function(e){
            if(is_popup_doc != 1){
                var doc_img = $(this).attr('href');
                $('body').prepend('<div class="popup_doc" style="opacity: 0;"><div class="popup_doc_images"></div></div>');
                $('<img />').attr('src',doc_img).prependTo('.popup_doc > .popup_doc_images');
                is_popup_doc = 1;
                $('.popup_doc').delay(100).animate({'opacity':1},300);
            }

            $('.popup_doc').click(function(){
                $(this).animate({'opacity':0},300);
                setTimeout(function(){
                    $('.popup_doc').detach();
                    is_popup_doc = 0;
                },400);
            });
            
            e.preventDefault();
        });

        $('.main_head_product .content_mhp .wrapper > .mhp_images').eq(0).css('display','block');

        $('.main_head_product .mhp_list__link .mhp_link').click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')){
                var is_eq = $(this).index();
                var old_elem = $('.main_head_product .mhp_list__link .mhp_link.active');
                var old_eq = old_elem.index();
                old_elem.removeClass('active');
                $(this).addClass('active');

                $('.main_head_product .content_mhp .wrapper > .mhp_images').eq(old_eq).fadeOut(300);
                $('.main_head_product .content_mhp .wrapper > .mhp_images').eq(is_eq).delay(310).fadeIn(300);
                //$('.main_head_product .content_mhp .wrapper').eq(old_eq).css('display','none'); //.fadeOut(300);
               // $('.main_head_product .content_mhp .wrapper').eq(is_eq).css('display','block'); //.fadeIn(300);

             //   console.log(is_eq);
            }
        });

    });

    window.onload = function () {

        if($('body').hasClass('front')){
            var i = 1;
            var tr_count = $('.layer').length;
            (function() {
                if (i <= tr_count) {
                    $('.layer[data-layer="'+i+'"]').addClass('show_lunch');
                    i++;
                    setTimeout(arguments.callee, 200);
                } else {
                  //  console.log('success!');
                    $('.laver_caption').delay(400).animate({'opacity':1}, 200);
                } 
            })();
        }

        if($('body').hasClass('page-portfolio')){
        	var pc_block_images_height;
        	$('.portfolio .portfolio_content .pc_block__images').each(function(){
        		pc_block_images_height = $(this).children('img').height();
        		$(this).css('height',pc_block_images_height);
        	});
        }

        $('.main_news .news_views .allnews > .news_list_odd').appendTo($('.main_news .news_views .news_col_left'));
        $('.main_news .news_views .allnews > .news_list_even').appendTo($('.main_news .news_views .news_col_right'));
        $('.main_news .news_views .allnews').detach();

        var mp_views_ww, mp_view_ww, mp_views_imgh, mp_caption_pt, mp_caption_top, mp_caption_left;
        var mp_view_height = $('.main_products .mp_views').height();
        $('.main_products .mp_views__view').each(function () {
            mp_views_ww = $(this).children('img').width();
            mp_views_imgh = $(this).children('img').height();
            mp_caption_pt = $(this).find('.mp_views__view_caption > a').innerHeight();

            if (mp_caption_pt < 102) {
                $(this).find('.mp_views__view_caption > a').css('padding-top', 102 - mp_caption_pt - 10 + 23 + 'px');
                mp_caption_pt = $(this).find('.mp_views__view_caption > a').innerHeight();
            }

            mp_view_ww = $(this).children('.mp_views__view_caption').innerWidth();
            mp_caption_top = mp_view_height - mp_views_imgh - mp_caption_pt - 35;
            mp_caption_left = (mp_views_ww - mp_view_ww) / 2;

            if(winWidth >= 768){
                $(this).children('.mp_views__view_caption').css({
                    'top': mp_caption_top + 'px',
                    left: mp_caption_left + 'px'
                });

                $(this).css('width', mp_views_ww + 'px');
            }
        });

        var customer_logo_height = $('.main_customers .customers_logo').height();
        var customer_logo_th, customer_logo_top;
        $('.main_customers .customers_logo > img').each(function () {
            customer_logo_th = $(this).height();
            customer_logo_top = (customer_logo_height - customer_logo_th) / 2;
            $(this).css('margin-top', customer_logo_top + 'px');
        });

        if(winWidth >= 640){
            $('.view_documents').packery({
                itemSelector: '.view_docs'
            });
        }

        $('.mb_visible').click(function(e){
            var mb_let = $('.vacancy_sub__form_input > input').val();
            console.log('click');
            if(mb_let != '' || mb_let.length > 8){
                e.preventDefault();
                $(this).detach();
                $('.vacancy_sub__form_input').addClass('success').html('<p class="success_let">Вы успешно подписались на рассылку!</p>');
            }
        });

        var position_scroll_top = 0;
        if($('body').hasClass('front')){
            var position_main_products_block = $('.sect.main_products').offset().top;
            var position_main_news = $('.sect.main_news').offset().top;
        }
        
        var scrolled;

        if (navigator.userAgent.indexOf ('Mac')!= -1) var os = 3;

        if(os) console.log(os);

        $(window).bind('scroll',function(){
            position_scroll_top = $(this).scrollTop();
            scrolled = $(this).scrollTop();
            if(location.pathname == '/'){
                if(position_scroll_top > (position_main_products_block + 100) && position_scroll_top < position_main_news){
                    elem_top_odd = (0 + (position_scroll_top / 20));
                    elem_top_even = (40 + (position_scroll_top / 30));
                    
                    if(winWidth > 1024){
						if(winWidth <=1440){
							$('.mp_views__view:odd > img').css('bottom',(373-(scrolled*.15))+'px');
							$('.mp_views__view:even > img').css('bottom',(622-(scrolled*.25))+'px');
						} else {
							if(os){
								$('.mp_views__view:odd > img').css('bottom',(369-(scrolled*.15))+'px');
								$('.mp_views__view:even > img').css('bottom',(615-(scrolled*.25))+'px');
							} else {
								$('.mp_views__view:odd > img').css('bottom',(390-(scrolled*.15))+'px');
								$('.mp_views__view:even > img').css('bottom',(651-(scrolled*.25))+'px');
							}
						}
                    } else if(winWidth <= 1024 && winWidth > 768) {
                    	$('.mp_views__view:odd > img').css('bottom',(349-(scrolled*.15))+'px');
                    	$('.mp_views__view:even > img').css('bottom',(581-(scrolled*.25))+'px');
                    } else if(winWidth <=768 && winWidth > 375){
                    	$('.mp_views__view:odd > img').css('bottom',(627-(scrolled*.25))+'px');
                    	$('.mp_views__view:even > img').css('bottom',(362-(scrolled*.15))+'px');
                    } 
                    

                  //  console.log('odd = '+-elem_top_odd+'; even = '+-elem_top_even);
                }
            }
        });

    };

    /************************************************************/
})(jQuery);



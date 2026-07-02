<?php
/**
 * Theme functions.
 *
 * @package Kurashi_Choice_Lab
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function kcl_setup() {
	load_theme_textdomain( 'kurashi-choice-lab', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo', array(
		'height'      => 80,
		'width'       => 240,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'customize-selective-refresh-widgets' );
	add_theme_support( 'editor-styles' );
	add_editor_style( 'style.css' );

	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'kurashi-choice-lab' ),
		'footer'  => __( 'Footer Menu', 'kurashi-choice-lab' ),
	) );
}
add_action( 'after_setup_theme', 'kcl_setup' );

function kcl_enqueue_assets() {
	wp_enqueue_style( 'kcl-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );
	wp_enqueue_script( 'kcl-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), wp_get_theme()->get( 'Version' ), true );
}
add_action( 'wp_enqueue_scripts', 'kcl_enqueue_assets' );

function kcl_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'kurashi-choice-lab' ),
		'id'            => 'sidebar-1',
		'description'   => __( '記事ページや一覧ページのサイドバーに表示します。', 'kurashi-choice-lab' ),
		'before_widget' => '<section id="%1$s" class="widget content-panel %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer Widgets', 'kurashi-choice-lab' ),
		'id'            => 'footer-widgets',
		'description'   => __( 'フッター上部に表示します。', 'kurashi-choice-lab' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'kcl_widgets_init' );

function kcl_excerpt_length( $length ) {
	return 78;
}
add_filter( 'excerpt_length', 'kcl_excerpt_length' );

function kcl_excerpt_more() {
	return '...';
}
add_filter( 'excerpt_more', 'kcl_excerpt_more' );

function kcl_get_meta_description() {
	if ( is_singular() ) {
		$description = get_post_meta( get_the_ID(), '_kcl_meta_description', true );
		if ( $description ) {
			return wp_strip_all_tags( $description );
		}

		return wp_trim_words( wp_strip_all_tags( get_the_excerpt() ?: get_the_content() ), 42, '' );
	}

	if ( is_category() || is_tag() || is_tax() ) {
		return wp_strip_all_tags( term_description() ?: single_term_title( '', false ) );
	}

	if ( is_search() ) {
		return sprintf( __( '「%s」の検索結果一覧です。', 'kurashi-choice-lab' ), get_search_query() );
	}

	return get_bloginfo( 'description' ) ?: __( '買ってから後悔しない、暮らしのアイテム選びをサポートする比較ブログ。', 'kurashi-choice-lab' );
}

function kcl_output_seo_meta() {
	$description = kcl_get_meta_description();
	if ( $description ) {
		echo '<meta name="description" content="' . esc_attr( $description ) . '">' . "\n";
	}

	if ( is_singular() || is_home() || is_front_page() || is_archive() ) {
		echo '<link rel="canonical" href="' . esc_url( kcl_canonical_url() ) . '">' . "\n";
	}

	echo '<meta property="og:type" content="' . ( is_singular() ? 'article' : 'website' ) . '">' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( wp_get_document_title() ) . '">' . "\n";
	echo '<meta property="og:description" content="' . esc_attr( $description ) . '">' . "\n";
	echo '<meta property="og:site_name" content="' . esc_attr( get_bloginfo( 'name' ) ) . '">' . "\n";
}
add_action( 'wp_head', 'kcl_output_seo_meta', 1 );

function kcl_canonical_url() {
	if ( is_singular() ) {
		return get_permalink();
	}

	if ( is_category() || is_tag() || is_tax() ) {
		return get_term_link( get_queried_object() );
	}

	if ( is_home() && ! is_front_page() ) {
		return get_permalink( get_option( 'page_for_posts' ) );
	}

	return home_url( add_query_arg( null, null ) );
}

function kcl_breadcrumbs() {
	if ( is_front_page() ) {
		return;
	}

	echo '<nav class="breadcrumbs" aria-label="' . esc_attr__( 'Breadcrumbs', 'kurashi-choice-lab' ) . '">';
	echo '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'ホーム', 'kurashi-choice-lab' ) . '</a>';
	echo '<span aria-hidden="true">/</span>';

	if ( is_singular( 'post' ) ) {
		$category = get_the_category();
		if ( ! empty( $category ) ) {
			echo '<a href="' . esc_url( get_category_link( $category[0] ) ) . '">' . esc_html( $category[0]->name ) . '</a>';
			echo '<span aria-hidden="true">/</span>';
		}
		echo '<span>' . esc_html( get_the_title() ) . '</span>';
	} elseif ( is_page() ) {
		echo '<span>' . esc_html( get_the_title() ) . '</span>';
	} elseif ( is_archive() ) {
		echo '<span>' . esc_html( get_the_archive_title() ) . '</span>';
	} elseif ( is_search() ) {
		echo '<span>' . esc_html__( '検索結果', 'kurashi-choice-lab' ) . '</span>';
	} else {
		echo '<span>' . esc_html( wp_get_document_title() ) . '</span>';
	}

	echo '</nav>';
}

function kcl_posted_on() {
	echo '<div class="article-meta">';
	echo '<span>' . esc_html( get_the_date() ) . '</span>';
	if ( has_category() ) {
		echo '<span>' . wp_kses_post( get_the_category_list( ', ' ) ) . '</span>';
	}
	echo '</div>';
}

function kcl_the_posts_pagination() {
	the_posts_pagination( array(
		'mid_size'           => 2,
		'prev_text'          => __( '前へ', 'kurashi-choice-lab' ),
		'next_text'          => __( '次へ', 'kurashi-choice-lab' ),
		'screen_reader_text' => __( '記事ナビゲーション', 'kurashi-choice-lab' ),
	) );
}

function kcl_related_posts( $post_id = null ) {
	$post_id = $post_id ?: get_the_ID();
	$cats    = wp_get_post_categories( $post_id );

	$args = array(
		'post__not_in'        => array( $post_id ),
		'posts_per_page'      => 3,
		'ignore_sticky_posts' => true,
	);

	if ( $cats ) {
		$args['category__in'] = $cats;
	}

	$related = new WP_Query( $args );
	if ( ! $related->have_posts() ) {
		return;
	}

	echo '<section class="related-links"><h2>' . esc_html__( '関連記事', 'kurashi-choice-lab' ) . '</h2><div>';
	while ( $related->have_posts() ) {
		$related->the_post();
		echo '<a href="' . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a>';
	}
	echo '</div></section>';
	wp_reset_postdata();
}

<?php
/**
 * Sidebar template.
 *
 * @package Kurashi_Choice_Lab
 */
?>
<aside class="sidebar" aria-label="<?php esc_attr_e( 'サイドバー', 'kurashi-choice-lab' ); ?>">
	<section class="widget content-panel">
		<h2 class="widget-title"><?php esc_html_e( '検索', 'kurashi-choice-lab' ); ?></h2>
		<?php get_search_form(); ?>
	</section>
	<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	<?php else : ?>
		<section class="widget content-panel">
			<h2 class="widget-title"><?php esc_html_e( 'カテゴリー', 'kurashi-choice-lab' ); ?></h2>
			<ul><?php wp_list_categories( array( 'title_li' => '' ) ); ?></ul>
		</section>
		<section class="widget content-panel">
			<h2 class="widget-title"><?php esc_html_e( '最新記事', 'kurashi-choice-lab' ); ?></h2>
			<ul>
				<?php
				$recent_posts = wp_get_recent_posts( array( 'numberposts' => 5, 'post_status' => 'publish' ) );
				foreach ( $recent_posts as $recent ) :
					?>
					<li><a href="<?php echo esc_url( get_permalink( $recent['ID'] ) ); ?>"><?php echo esc_html( $recent['post_title'] ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		</section>
	<?php endif; ?>
</aside>

<?php
/**
 * Search results template.
 *
 * @package Kurashi_Choice_Lab
 */

get_header();
?>
<main>
	<section class="page-title">
		<p class="eyebrow"><?php esc_html_e( 'Search', 'kurashi-choice-lab' ); ?></p>
		<h1><?php printf( esc_html__( '「%s」の検索結果', 'kurashi-choice-lab' ), esc_html( get_search_query() ) ); ?></h1>
		<p><?php esc_html_e( 'キーワードに関連する記事を表示しています。', 'kurashi-choice-lab' ); ?></p>
	</section>
	<?php kcl_breadcrumbs(); ?>
	<div class="content-with-sidebar section compact">
		<div class="main-content">
			<?php if ( have_posts() ) : ?>
				<div class="article-grid">
					<?php
					while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/content', 'card' );
					endwhile;
					?>
				</div>
				<?php kcl_the_posts_pagination(); ?>
			<?php else : ?>
				<?php get_template_part( 'template-parts/content', 'none' ); ?>
			<?php endif; ?>
		</div>
		<?php get_sidebar(); ?>
	</div>
</main>
<?php
get_footer();

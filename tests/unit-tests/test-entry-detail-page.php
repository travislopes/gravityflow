<?php

/**
 * Testing Gravity_Flow_Entry_Detail_Page
 *
 * @group testsuite
 */
class Tests_Gravity_Flow_Entry_Detail_Page extends GF_UnitTestCase {

	private $api_stub;

	public function setUp() {
		require_once( dirname( __FILE__ ) . '/../../includes/pages/class-entry-detail-page.php' );
		require_once( dirname( __FILE__ ) . '/../../includes/class-gf-api-strategy.php' );

		$this->api_stub = $this->createMock( Gravity_Flow_GF_API_Strategy::class );
		parent::setUp();
	}

	/**
	 * @dataProvider is_valid_data_provider
	 *
	 * @param $form_id
	 * @param $entry_id
	 * @param $stub_form
	 * @param $stub_entry
	 * @param $expected
	 */
	public function test_is_valid( $form_id, $entry_id, $stub_form, $stub_entry, $expected ) {
		$this->api_stub->method( 'get_form' )->willReturn( $stub_form );
		$this->api_stub->method( 'get_entry' )->willReturn( $stub_entry );

		$page = new Gravity_Flow_Entry_Detail_Page( $form_id, $entry_id, $this->api_stub );

		$this->assertEquals( $expected, $page->is_valid() );
	}

	public function is_valid_data_provider() {
		return array(
			// Matching form IDs
			array(
				1,
				2,
				array(
					'id' => 1,
				),
				array(
					'form_id' => 1,
				),
				true,
			),
			// Non-matching form IDs
			array(
				1,
				2,
				array(
					'id' => 2,
				),
				array(
					'form_id' => 1,
				),
				false,
			),
			// Invalid/empty Form
			array(
				1,
				2,
				false,
				array(
					'form_id' => 1,
				),
				false,
			),
			// Invalid Entry
			array(
				1,
				2,
				array(
					'id' => 2,
				),
				new \WP_Error( 'Invalid' ),
				false,
			),
		);
	}

}

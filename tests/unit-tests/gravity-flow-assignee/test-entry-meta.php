<?php

/**
 * Testing Gravity_Flow_Assignee entry meta functions.
 *
 * @group testsuite
 */
class Tests_Gravity_Flow_Assignee_Entry_Meta_Functions extends GF_UnitTestCase {

	public function test_get_status() {
		gform_add_meta( 5, 'workflow_test-type_test-id', 'testing', 1 );
		global $_gform_lead_meta;
		$_gform_lead_meta['1_5_workflow_test-type_test-id'] = 'cached value';

		$step = $this->getMockBuilder( 'Gravity_Flow_Step' )->getMock();
		$step->method( 'get_entry_id' )->willReturn( 5 );

		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id', $step );
		$this->assertSame( 'testing', $assignee->get_status() );
	}

	public function test_update_status() {
		$form_id  = $this->factory->form->create();
		$entry_id = GFAPI::add_entry( array( 'form_id' => $form_id ) );
		$step     = $this->getMockBuilder( 'Gravity_Flow_Step' )->getMock();
		$step->method( 'get_entry_id' )->willReturn( $entry_id );
		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id', $step );

		$before = time();
		$assignee->update_status( 'testing' );
		$this->assertSame( 'testing', gform_get_meta( $entry_id, 'workflow_test-type_test-id' ) );
		$this->assertGreaterThanOrEqual( $before, gform_get_meta( $entry_id, 'workflow_test-type_test-id_timestamp' ) );
	}

	public function test_get_status_timestamp() {
		$time = time();

		gform_add_meta( 5, 'workflow_test-type_test-id_timestamp', $time, 1 );

		$step = $this->getMockBuilder( 'Gravity_Flow_Step' )->getMock();
		$step->method( 'get_entry_id' )->willReturn( 5 );

		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id', $step );
		$this->assertSame( $time, $assignee->get_status_timestamp() );

	}

}

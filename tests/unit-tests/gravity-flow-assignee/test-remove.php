<?php

/**
 * Testing Gravity_Flow_Assignee::remove().
 *
 * @group testsuite
 */
class Tests_Gravity_Flow_Assignee_Remove extends GF_UnitTestCase {

	public function test_status() {
		$meta_key = 'workflow_test-type_test-id';
		gform_add_meta( 5, $meta_key, 'testing', 1 );

		$step = $this->getMockBuilder( 'Gravity_Flow_Step' )->getMock();
		$step->method( 'get_entry_id' )->willReturn( 5 );

		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id', $step );
		$assignee->remove();
		$this->assertFalse( gform_get_meta( 5, $meta_key ) );
	}

	public function test_timestamp() {
		$meta_key = 'workflow_test-type_test-id_timestamp';
		gform_add_meta( 5, $meta_key, 'testing', 1 );

		$step = $this->getMockBuilder( 'Gravity_Flow_Step' )->getMock();
		$step->method( 'get_entry_id' )->willReturn( 5 );

		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id', $step );
		$assignee->remove();
		$this->assertFalse( gform_get_meta( 5, $meta_key ) );
	}

	public function test_reminder_timestamp() {
		$meta_key = 'workflow_test-type_test-id_reminder_timestamp';
		gform_add_meta( 5, $meta_key, 'testing', 1 );

		$step = $this->getMockBuilder( 'Gravity_Flow_Step' )->getMock();
		$step->method( 'get_entry_id' )->willReturn( 5 );

		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id', $step );
		$assignee->remove();
		$this->assertFalse( gform_get_meta( 5, $meta_key ) );
	}

}

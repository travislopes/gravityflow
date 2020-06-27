<?php

/**
 * Testing Gravity_Flow_Assignee::replace_variables().
 *
 * @group testsuite
 */
class Tests_Gravity_Flow_Assignee_Replace_Variables extends GF_UnitTestCase {

	public function test_not_instance() {
		$assignee = new Gravity_Flow_Assignee( 'user_id|1' );
		$this->assertSame( '{created_by}', $assignee->replace_variables( '{created_by}' ) );
	}

	public function test_is_instance() {
		$step = $this->getMockBuilder( 'Gravity_Flow_Step' )->getMock();
		$step->method( 'get_id' )->willReturn( 'step id' );
		$step->method( 'get_entry_timestamp' )->willReturn( 'timestamp' );
		$step->method( 'get_entry_id' )->willReturn( 'entry id' );

		$assignee = new Gravity_Flow_Assignee( 'user_id|1', $step );
		$actual   = $assignee->replace_variables( '{workflow_approve_token}' );
		$this->assertNotEmpty( $actual );
		$this->assertNotSame( '{workflow_approve_token}', $actual );
	}

}

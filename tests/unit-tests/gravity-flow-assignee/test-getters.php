<?php

/**
 * Testing Gravity_Flow_Assignee getter functions.
 *
 * @group testsuite
 */
class Tests_Gravity_Flow_Assignee_Getters extends GF_UnitTestCase {

	public function test_get_id() {
		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id' );
		$this->assertSame( 'test-id', $assignee->get_id() );
	}

	public function test_get_key() {
		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id' );
		$this->assertSame( 'test-type|test-id', $assignee->get_key() );
	}

	public function test_get_type() {
		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id' );
		$this->assertSame( 'test-type', $assignee->get_type() );
	}

	public function test_get_step() {
		$step     = $this->getMockBuilder( 'Gravity_Flow_Step' )->getMock();
		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id', $step );
		$this->assertSame( $step, $assignee->get_step() );
	}

	public function test_get_editable_fields() {
		$editable_fields = array( 'testing' );
		$assignee        = new Gravity_Flow_Assignee( array(
			'id'              => 'test-id',
			'type'            => 'test-type',
			'editable_fields' => array( 'testing' ),
		) );
		$this->assertSame( $editable_fields, $assignee->get_editable_fields() );
	}

	public function test_get_user() {
		$user     = get_userdata( 1 );
		$assignee = new Gravity_Flow_Assignee( array(
			'id'   => 'test-id',
			'type' => 'test-type',
			'user' => $user,
		) );
		$this->assertSame( $user, $assignee->get_user() );
	}

	public function test_get_status_key() {
		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id' );
		$this->assertSame( 'workflow_test-type_test-id', $assignee->get_status_key() );
	}

	public function test_get_display_name() {
		$assignee = new Gravity_Flow_Assignee( 'test-type|test-id' );
		$this->assertSame( 'test-id', $assignee->get_display_name() );
	}

	public function test_get_display_name_user() {
		$assignee = $this->getMockBuilder( 'Gravity_Flow_Assignee' )
		                 ->setMethods( array( 'get_user' ) )
		                 ->getMock();
		$assignee->method( 'get_user' )
		         ->willReturn( get_userdata( 1 ) );
		$this->assertSame( 'admin', $assignee->get_display_name() );
	}

}

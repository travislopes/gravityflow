<?php

/**
 * Testing Gravity_Flow_Assignee::maybe_set_user().
 *
 * @requires PHPUnit >= 4
 *
 * @group testsuite
 */
class Tests_Gravity_Flow_Assignee_Maybe_Set_User extends GF_UnitTestCase {

	public function test_type_user_id() {
		$assignee = $this->getMockBuilder( 'Gravity_Flow_Assignee' )->getMock();
		$assignee->method( 'get_type' )->willReturn( 'user_id' );
		$assignee->method( 'get_id' )->willReturn( 1 );

		$this->_invoke_private_method( 'Gravity_Flow_Assignee', 'maybe_set_user', array(), $assignee );

		$expected_user = get_userdata( 1 );
		$this->assertEquals( $expected_user, $this->_get_property_value( 'Gravity_Flow_Assignee', 'user', $assignee ) );
	}

	public function test_type_email() {
		$assignee = $this->getMockBuilder( 'Gravity_Flow_Assignee' )->getMock();
		$assignee->method( 'get_type' )->willReturn( 'email' );
		$assignee->method( 'get_id' )->willReturn( 'admin@example.org' );

		$this->_invoke_private_method( 'Gravity_Flow_Assignee', 'maybe_set_user', array(), $assignee );

		$expected_user = get_userdata( 1 );
		$this->assertEquals( $expected_user, $this->_get_property_value( 'Gravity_Flow_Assignee', 'user', $assignee ) );
	}

	public function test_type_other() {
		$assignee = $this->getMockBuilder( 'Gravity_Flow_Assignee' )->getMock();
		$assignee->method( 'get_type' )->willReturn( 'other' );

		// Shouldn't be called for this type.
		$assignee->method( 'get_id' )->willReturn( 1 );

		$this->_invoke_private_method( 'Gravity_Flow_Assignee', 'maybe_set_user', array(), $assignee );
		$this->assertNull( $this->_get_property_value( 'Gravity_Flow_Assignee', 'user', $assignee ) );
	}

	public function test_get_user() {
		$assignee = $this->getMockBuilder( 'Gravity_Flow_Assignee' )->getMock();
		$assignee->method( 'get_user' )->willReturn( 'the user' );

		// Shouldn't be called since get_user returned a value.
		$assignee->method( 'get_type' )->willReturn( 'user_id' );
		$assignee->method( 'get_id' )->willReturn( 1 );

		$this->_invoke_private_method( 'Gravity_Flow_Assignee', 'maybe_set_user', array(), $assignee );
		$this->assertNull( $this->_get_property_value( 'Gravity_Flow_Assignee', 'user', $assignee ) );
	}

}

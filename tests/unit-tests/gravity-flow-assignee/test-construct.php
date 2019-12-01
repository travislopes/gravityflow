<?php

/**
 * Testing the Gravity_Flow_Assignee constructor.
 *
 * @group testsuite
 */
class Tests_Gravity_Flow_Assignee_Construct extends GF_UnitTestCase {

	public function test_empty_args() {
		$assignee = new Gravity_Flow_Assignee( array(), 'step' );
		$this->assertInstanceOf( 'Gravity_Flow_Assignee', $assignee );
		$this->assertNull( $this->_get_property_value( 'Gravity_Flow_Assignee', 'id', $assignee ), 'id property' );
		$this->assertNull( $this->_get_property_value( 'Gravity_Flow_Assignee', 'type', $assignee ), 'type property' );
		$this->assertNull( $this->_get_property_value( 'Gravity_Flow_Assignee', 'key', $assignee ), 'key property' );
		$this->assertSame( array(), $this->_get_property_value( 'Gravity_Flow_Assignee', 'editable_fields', $assignee ), 'editable_fields property' );
		$this->assertNull( $this->_get_property_value( 'Gravity_Flow_Assignee', 'user', $assignee ), 'user property' );
		$this->assertNull( $this->_get_property_value( 'Gravity_Flow_Assignee', 'step', $assignee ), 'step property' );
	}

	/**
	 * @dataProvider data_provider_cases
	 *
	 * @param $entry
	 * @param $assignee_args
	 * @param $expected_id
	 * @param $expected_type
	 * @param $expected_key
	 */
	public function test_case( $entry, $assignee_args, $expected_id, $expected_type, $expected_key ) {
		if ( ! empty( $entry ) ) {
			$step = $this->createMock( 'Gravity_Flow_Step' );
			$step->method( 'get_entry' )->willReturn( $entry );
		} else {
			$step = false;
		}

		$assignee = new Gravity_Flow_Assignee( $assignee_args, $step );

		$this->assertInstanceOf( 'Gravity_Flow_Assignee', $assignee );
		$this->assertSame( $expected_id, $this->_get_property_value( 'Gravity_Flow_Assignee', 'id', $assignee ), 'id property' );
		$this->assertSame( $expected_type, $this->_get_property_value( 'Gravity_Flow_Assignee', 'type', $assignee ), 'type property' );
		$this->assertSame( $expected_key, $this->_get_property_value( 'Gravity_Flow_Assignee', 'key', $assignee ), 'key property' );
		$this->assertSame( $step, $this->_get_property_value( 'Gravity_Flow_Assignee', 'step', $assignee ), 'step property' );

		$user = $expected_type === 'user_id' ? get_userdata( $expected_id ) : null;
		$this->assertEquals( $user, $this->_get_property_value( 'Gravity_Flow_Assignee', 'user', $assignee ), 'user property' );
	}

	public function data_provider_cases() {
		return array(
			'default-string'      => array(
				array(),
				'type-string|id-string',
				'id-string',
				'type-string',
				'type-string|id-string',
			),
			'default-array'       => array(
				array(),
				array( 'id' => 'id-array', 'type' => 'type-array' ),
				'id-array',
				'type-array',
				'type-array|id-array',
			),
			'assignee_field'      => array(
				array( '5' => 'user_id|1' ),
				'assignee_field|5',
				'1',
				'user_id',
				'user_id|1',
			),
			'assignee_user_field' => array(
				array( '5' => '1' ),
				'assignee_user_field|5',
				1,
				'user_id',
				'user_id|1',
			),
			'assignee_role_field' => array(
				array( '5' => 'administrator' ),
				'assignee_role_field|5',
				'administrator',
				'role',
				'role|administrator',
			),
			'email_field'         => array(
				array( '5' => 'test@test.test' ),
				'email_field|5',
				'test@test.test',
				'email',
				'email|test@test.test',
			),
			'entry'               => array(
				array( 'created_by' => '1' ),
				'entry|created_by',
				'1',
				'user_id',
				'user_id|1',
			),
			'default-key'         => array(
				array(),
				'user_id|1',
				'1',
				'user_id',
				'user_id|1',
			),
		);
	}

	public function test_editable_fields_arg() {
		$assignee = new Gravity_Flow_Assignee( array(
			'id'              => 'id-array',
			'type'            => 'type-array',
			'editable_fields' => 'testing',
		) );
		$this->assertInstanceOf( 'Gravity_Flow_Assignee', $assignee );
		$this->assertSame( 'testing', $this->_get_property_value( 'Gravity_Flow_Assignee', 'editable_fields', $assignee ), 'editable_fields property' );
	}

	public function test_user_arg() {
		$user     = get_userdata( 1 );
		$assignee = new Gravity_Flow_Assignee( array(
			'id'   => 'id-array',
			'type' => 'type-array',
			'user' => $user,
		) );
		$this->assertInstanceOf( 'Gravity_Flow_Assignee', $assignee );
		$this->assertSame( $user, $this->_get_property_value( 'Gravity_Flow_Assignee', 'user', $assignee ), 'user property' );
	}

	public function test_user_arg_invalid() {
		$assignee = new Gravity_Flow_Assignee( array(
			'id'   => 'id-array',
			'type' => 'type-array',
			'user' => 'invalid',
		) );
		$this->assertInstanceOf( 'Gravity_Flow_Assignee', $assignee );
		$this->assertNull( $this->_get_property_value( 'Gravity_Flow_Assignee', 'user', $assignee ), 'user property' );
	}

}

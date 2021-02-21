<?php

/**
 * Testing Gravity_Flow_Entry_Detail_Page
 *
 * @group testsuite
 */
class Tests_Gravity_Flow_Entry_Detail_Page extends GF_UnitTestCase {

	private $api_stub;

	public function setUp() {
		$this->api_stub = $this->createMock( GFAPI::class );
		parent::setUp();
	}

	public function test_fake_thing() {
		$this->assertEquals( 1, 1 );
	}

}

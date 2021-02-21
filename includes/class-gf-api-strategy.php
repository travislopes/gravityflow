<?php

class Gravity_Flow_GF_API_Strategy {

	private static $instance;

	public function __call( $name, $arguments ) {
		if ( ! method_exists( 'GFAPI', $name ) ) {
			throw new \InvalidArgumentException( 'Method GFAPI::' . $name . ' not found.' );
		}

		return call_user_func_array( array( 'GFAPI', $name ), $arguments );
	}

	public function get_form( $form_id ) {
		return GFAPI::get_form( $form_id );
	}

	public function get_entry( $entry_id ) {
		return GFAPI::get_entry( $entry_id );
	}

	public static function instance() {
		if ( ! empty( self::$instance ) ) {
			return self::$instance;
		}

		self::$instance = new self();

		return self::$instance;
	}

}
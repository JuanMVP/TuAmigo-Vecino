package com.salesianostriana.dam.formbeans;

public class RegistroUser {
	private String user;
	private String pass1;
	private String pass2;
	
	public RegistroUser() {
		
	}

	public RegistroUser(String user, String pass1, String pass2) {
		super();
		this.user = user;
		this.pass1 = pass1;
		this.pass2 = pass2;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPass1() {
		return pass1;
	}

	public void setPass1(String pass1) {
		this.pass1 = pass1;
	}

	public String getPass2() {
		return pass2;
	}

	public void setPass2(String pass2) {
		this.pass2 = pass2;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		result = prime * result + ((pass1 == null) ? 0 : pass1.hashCode());
		result = prime * result + ((pass2 == null) ? 0 : pass2.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RegistroUser other = (RegistroUser) obj;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		if (pass1 == null) {
			if (other.pass1 != null)
				return false;
		} else if (!pass1.equals(other.pass1))
			return false;
		if (pass2 == null) {
			if (other.pass2 != null)
				return false;
		} else if (!pass2.equals(other.pass2))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "RegistroUser [user=" + user + ", pass1=" + pass1 + ", pass2=" + pass2 + "]";
	}
	
	
}

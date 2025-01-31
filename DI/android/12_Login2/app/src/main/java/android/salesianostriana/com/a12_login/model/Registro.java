package android.salesianostriana.com.a12_login.model;

public class Registro {

    private String name;
    private String email;
    private String password;
    private String picture;
    private String role;

    public Registro(){}


    public Registro(String name, String email, String password, String picture, String role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.picture = picture;
        this.role = role;
    }


    public Registro(String name, String email, String password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = "user";
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getPicture() {
        return picture;
    }

    public String getRole() {
        return role;
    }


    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

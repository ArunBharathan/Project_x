import React, { useState, useEffect } from "react";
import './style.scss';

export function LoginPage() {
  const [formData, setFormData] = useState<any>(null);
  const [formType, setFormType] = useState<'SIGN_IN' | 'SIGN_UP'>('SIGN_IN');
  return (
    <div className="container">
      <div className="login-card">
        {formType === 'SIGN_UP' ? (<form>
          <input name="email" type="email" inputMode="email" />
          <input name="password" type="text" />
          <button type="submit" >Sign Up</button>
        </form>) : (<form>
          <input name="email" type="email" inputMode="email" />
          <input name="password" type="text" />
          <button type="submit" >Sign In</button>
        </form>)}
      </div>
    </div>
  );
}

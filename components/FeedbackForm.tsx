'use client';
import React, { useState, FormEvent } from 'react';
import { supabase } from '@/app/utils/supabase';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

function FeedbackForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('feedback')
        .insert([{ name, email, message }]);

      if (error) throw error;

      setSubmitStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        {submitStatus === 'success' && (
          <div className="bg-green-100 text-green-700 p-3 rounded">
            Thank you for your feedback!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-100 text-red-700 p-3 rounded">
            Something went wrong. Please try again.
          </div>
        )}
        <div>
          <Label htmlFor="name" className="mb-2">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='John Doe'
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='john.deo@gmail.com'
            required
            
          />
        </div>
        <div>
          <Label htmlFor="message" className=" mb-2">Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder='Your Message ... '
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className='bg-lime-600  text-white hover:bg-lime-900'>
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </Button>
      </form>
    </div>
  );
}

export default FeedbackForm;

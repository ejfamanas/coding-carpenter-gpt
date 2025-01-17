from transformers import GPT2Tokenizer, GPT2LMHeadModel

# Load GPT-2 tokenizer and model
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

# Assign a pad token (GPT-2 doesn't have one by default)
tokenizer.pad_token = tokenizer.eos_token

# Tokenize inputs
inputs = tokenizer(["Hello, how are you?", "I am fine, thank you."],
                   return_tensors="pt",
                   padding=True,
                   truncation=True)

# Pass inputs and attention mask to the model
outputs = model.generate(inputs["input_ids"],
                         attention_mask=inputs["attention_mask"],
                         max_length=50)

# Decode and print the results
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
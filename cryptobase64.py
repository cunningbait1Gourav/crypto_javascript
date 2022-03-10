import base64


s= '72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf'
byte_array= bytearray.fromhex(s)
print(byte_array)

a= base64.urlsafe_b64encode(byte_array)

print(a)